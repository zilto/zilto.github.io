from pathlib import Path
from typing import Any

from fastapi import FastAPI, APIRouter, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
import uvicorn

from schemas import load_all_projects, reorder_starred_projects


BASE_PATH = Path(__file__).resolve().parent
templates = Jinja2Templates(directory=str(BASE_PATH.joinpath("templates")))


def get_context(request: Request, **kwargs) -> dict[str, Any]:
    context = {"request": request, **kwargs}
    return context


def get_app() -> FastAPI:
    app = FastAPI()
    app.mount("/static", StaticFiles(directory=str(BASE_PATH.joinpath("static"))), name="static")
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


@app.get("/projects/", status_code=200, response_class=HTMLResponse)
def projects(request: Request):
    projects_data = load_all_projects("./app/static/projects")
    projects_data = reorder_starred_projects(projects_data)
    context = get_context(request, projects=projects_data)
    return templates.TemplateResponse("projects.html", context)


@app.get("/project/{project_id:int}", status_code=200, response_class=HTMLResponse)
def project(request: Request):
    project_id = request.path_params["project_id"]
    projects_data = load_all_projects("./app/static/projects")
    project_data = next((p for p in projects_data if p["id"] == project_id))

    context = get_context(request, project=project_data)
    return templates.TemplateResponse("project.html", context)
    

@app.get("/blogs/", status_code=200, response_class=HTMLResponse)
def blogs(request: Request):
    blogs_data = [{"id": 1, "title": "The perks of creating dataflows with Hamilton", "md_path": "hamilton_blog.md",
                   "publication_date": "2022-08-08", "url": "https://medium.com/@thijean/the-perks-of-creating-dataflows-with-hamilton-36e8c56dd2a"}]
    context = get_context(request, blogs=blogs_data)
    return templates.TemplateResponse("blogs.html", context)


@app.get("/blog/{blog_id:int}", status_code=200, response_class=HTMLResponse)
def blog(request: Request):
    blog_id = request.path_params["blog_id"]
    blogs_data = [{"id": 1, "title": "The perks of creating dataflows with Hamilton", "md_path": "hamilton_blog.md",
                   "publication_date": "2022-08-08", "url": "https://medium.com/@thijean/the-perks-of-creating-dataflows-with-hamilton-36e8c56dd2a"}]
    blog_data = next((b for b in blogs_data if b["id"] == blog_id))

    context = get_context(request, blog=blog_data)
    return templates.TemplateResponse("blog.html", context)


@app.get("/sketch/{sketch_name:str}", status_code=200, response_class=HTMLResponse)
def sketch(request: Request):
    context = get_context(request, sketch="flower.js")
    return templates.TemplateResponse("sketch.html", context)


if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=8001, log_level="debug")
