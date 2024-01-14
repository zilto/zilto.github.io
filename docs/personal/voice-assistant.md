---
title: Voice Assistant
description: Launch arbitrary Python functions using your microphone
---

This project leverages the multilingual speech-to-text model Whisper from OpenAI. The model is loaded on a websocket server. The connected client sends an audio input stream and receives text transcriptions. If the predefined keyword is found, the following words are parsed to find a registered command using fuzzy matching. If there's a match, the command is executed on the client device.

A command is an arbitrary Python function. The name of function (separated by underscores _) is what needs to be uttered to trigger the command. Words spoken after the command name are parsed as function arguments. Additional commands can be added to Python modules.

> 📑 NOTE. This project is pre-ChatGPT.

## Design choices
* **Client-server architecture**. Allows a client with limited resources to leverage speech-to-text (smartphone, remote, dev board). Clients can share a server, and a client could potentially trigger commands on another client.

* **Low-latency requirements**. Chunk the audio stream into reasonable size to transcribe with good accuracy and reduce latency. Use async, websockets, and threads to have non-blocking operations on the client while the server transcribes audio.

* **Structured commands**. The opiniated structure removes the problem of natural language understanding, which allows for faster development of new commands

* **Modular commands**. The modular organization of commands allows to ship a core app without bloating, and to make user-created commands easy to share

* **Few dependencies**. thefuzz is a quality of life and could be reimplemented; the SpeechRecognition is a bit messy, but has nice features to ignore ambient noise

## Languages, Technology, and Tools
- Python
- OpenAI Whisper (local model)
- NVIDIA CUDA
- Async
- Websockets
- Threads
- Fuzzy matching

## Snippet

```python title="Server snippet"
import asyncio
import base64
import json
import websockets

import numpy as np
import whisper


MODEL_NAME = "small.en"
LANGUAGE = "english"


async def server_handler(websocket):
    model = whisper.load_model(MODEL_NAME)

    async for message in websocket:
        event = json.loads(message)
        assert event["type"] == "audio_input"

        try:
            audio_bytes = base64.b64decode(event["data"].encode("ascii"))
            data = np.frombuffer(audio_bytes, np.int16) \
                     .flatten() \
                     .astype(np.float32) / 32768
            result = model.transcribe(data, language=LANGUAGE)
        except Exception as e:
            event = {"type": "error", "data": str(e)}
            await websocket.send(json.dumps(event))
            continue

        event = {"type": "transcript", "data": result["text"]}
        await websocket.send(json.dumps(event))


async def main():
    async with websockets.serve(server_handler, "localhost", 8001):
        await asyncio.Future()


if __name__ == "__main__":
    asyncio.run(main())
```