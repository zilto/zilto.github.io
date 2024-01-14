---
title: Semantic Blog Search
description: Query blogs from RSS feeds and explore content with vector search engine
---

Follow a list of curated sources (blogs, newsletter, websites) and query their RSS feeds. The HTML results are parsed to retrieve `<article>` tags and be processed into hierarchical Article and Paragraphs objects. The text objects are embedded and stored using the Weaviate vector engine. Objects can be retrieved via keyword, semantic search, or both! using the Weaviate GraphQL API.

> 📑 NOTE. This project is pre-ChatGPT.
> 📑 NOTE. My hybrid search (keyword+semantic) was implemented before Weaviate integrated it into their product.

## Languages, Technology, and Tools
- Python
- Weaviate (vector engine)
- Docker
- Docker compose
- Streamlit
- RSS
- XML
- sqlite
