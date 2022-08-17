from pathlib import Path
from typing import Any

from fastapi import FastAPI, APIRouter, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
import uvicorn


BASE_PATH = Path(__file__).resolve().parent
templates = Jinja2Templates(directory=str(BASE_PATH.joinpath("templates")))


def get_context(request: Request, **kwargs) -> dict[str, Any]:
    context = {"request": request, **kwargs}
    return context


def get_app() -> FastAPI:
    app = FastAPI()
    app.mount("/static", StaticFiles(directory=str(BASE_PATH.joinpath("static"))), name="static")
    app.mount("/blog_posts", StaticFiles(directory=str(BASE_PATH.joinpath("blog_posts"))), name="blog_posts")
    return app


app = get_app()


@app.get("/", status_code=200, response_class=HTMLResponse)
def home(request: Request):
    context = get_context(request)
    return templates.TemplateResponse("index.html", context)


@app.get("/index", status_code=200, response_class=HTMLResponse)
def index(request: Request):
    context = get_context(request)
    return templates.TemplateResponse("index.html", context)


@app.get("/temp", status_code=200, response_class=HTMLResponse)
def temp(request: Request):
    context = get_context(request)
    return templates.TemplateResponse("temp.html", context)


@app.get("/projects/", status_code=200, response_class=HTMLResponse)
def projects(request: Request):
    projects = [{"name": "cribbage", "html_url": "https://github.com/zilto/cribbage", "created_at": "2022-02-21T02:48:50Z"}, {"name": "ExcelQueryFormatter", "html_url": "https://github.com/zilto/ExcelQueryFormatter", "description": "Executable containing a python + pandas script to format Excel files", "created_at": "2020-08-05T00:21:19Z"}, {"name": "Honor-Thesis_friends-family", "html_url": "https://github.com/zilto/Honor-Thesis_friends-family", "description": "Predict next-day stress and happiness level using smartphone sensor data", "created_at": "2021-12-22T03:53:08Z"}, {"name": "IFT6390-Comp1", "html_url": "https://github.com/zilto/IFT6390-Comp1", "description": "IFT6390 - Kaggle competition #1 at https://www.kaggle.com/c/ift3395-6390-weatherevents", "created_at": "2021-12-15T15:47:47Z"}, {"name": "IFT6390-Comp2", "html_url": "https://github.com/zilto/IFT6390-Comp2", "description": "IFT6390 - Kaggle competition #2 at https://www.kaggle.com/c/cropharvest-crop-detection", "created_at": "2021-11-21T23:45:17Z"}, {"name": "imgur_archive", "html_url": "https://github.com/zilto/imgur_archive", "description": "Simple Python script to download Imgur content", "created_at": "2021-12-22T00:56:14Z"}, {"name": "IPWS-2021_TDAM", "html_url": "https://github.com/zilto/IPWS-2021_TDAM", "description": "Presentation given to TD Asset Managements representatives by the end of the 11th Industrial Problem Solving Workshop ", "created_at": "2021-12-15T15:59:29Z"}, {"name": "passe-passe", "html_url": "https://github.com/zilto/passe-passe", "description": "CLI tool to encrypt and store credentials", "created_at": "2020-11-02T01:22:47Z"}, {"name": "spotify_webapp", "html_url": "https://github.com/zilto/spotify_webapp", "description": "A small web app to download Spotify content to your device", "created_at": "2022-04-24T23:27:16Z"}, {"name": "streamlit_webapp", "html_url": "https://github.com/zilto/streamlit_webapp", "created_at": "2022-04-10T00:19:13Z"}, {"name": "zilto.github.io", "html_url": "https://github.com/zilto/zilto.github.io", "created_at": "2021-02-03T03:58:45Z"}]
    context = get_context(request, projects=projects)
    return templates.TemplateResponse("projects.html", context)


@app.get("/project/{project_id:int}", status_code=200, response_class=HTMLResponse)
def project(request: Request):
    project = ""
    context = get_context(request, project=project)
    return templates.TemplateResponse("project.html", context)
    

@app.get("/blogs/", status_code=200, response_class=HTMLResponse)
def blogs(request: Request):
    blogs = [{"title": "The perks of creating dataflows with Hamilton", "filename": "hamilton_blog.md", "publication_date": "2022-08-08"}]
    context = get_context(request, blogs=blogs)
    return templates.TemplateResponse("blogs.html", context)


@app.get("/blog/{blog_title:str}", status_code=200, response_class=HTMLResponse)
def blog(request: Request):
    blog = ""
    context = get_context(request, blog=blog)
    return templates.TemplateResponse("blog.html", context)


if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=8001, log_level="debug")    
