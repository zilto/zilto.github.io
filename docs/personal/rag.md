---
title: Retrieval Augmented Generation
---
This application allows you to search arXiv for PDFs or import arbitrary PDF files and search over them using LLMs. For each file, the text is divided in chunks that are embedded with OpenAI and stored in Weaviate. When you query the system, the most relevant chunks are retrieved and a summary answer is generated using OpenAI.

The ingestion and retrieval steps are implemented as dataflows with Hamilton and are exposed via FastAPI endpoints. The frontend is built with Streamlit and exposes the different functionalities via a simple web UI. Everything is packaged as containers with docker compose.

<img src="/img/docs/rag_app.png"/>

## Languages, Technology, and Tools
- Python
- Hamilton
- OpenAI API (ChatGPT)
- Weaviate (vector engine)
- Docker
- Docker compose
- Streamlit
- FastAPI

Blog: https://blog.dagworks.io/p/retrieval-augmented-generation-reference-arch
Code: https://github.com/DAGWorks-Inc/hamilton/tree/main/examples/LLM_Workflows/retrieval_augmented_generation