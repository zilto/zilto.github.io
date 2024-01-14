---
title: PDF Summarizer
---
Here's an extensible and production-ready PDF summarizer that you can run anywhere! The frontend uses streamlit, which communicates with a FastAPI backend powered by Hamilton. You give it a PDF file via the browser app and it returns you a text summary using the OpenAI API. If you want, you skip the browser inteface and directly access the /summarize endpoint with your document! Everything is containerized using Docker, so you should be able to run it where you please 🏃.

The ingestion and retrieval steps are implemented as dataflows with Hamilton and are exposed via FastAPI endpoints. The frontend is built with Streamlit and exposes the different functionalities via a simple web UI. Everything is packaged as containers with docker compose.

<img src="/img/docs/summarize_dataflow.png"/>

## Languages, Technology, and Tools
- Python
- Hamilton
- OpenAI API (ChatGPT)
- Docker
- Streamlit

Blog post: https://blog.dagworks.io/publish/posts/detail/136158667
Code: https://github.com/DAGWorks-Inc/hamilton/tree/main/examples/LLM_Workflows/pdf_summarizer