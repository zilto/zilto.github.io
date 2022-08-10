from pathlib import Path

from fastapi import FastAPI, APIRouter, Query, HTTPException, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
import uvicorn


BASE_PATH = Path(__file__).resolve().parent
TEMPLATES = Jinja2Templates(directory=str(BASE_PATH.joinpath("templates")))


app = FastAPI(title="API", openapi_url="/openapi.json")
api_router = APIRouter()


@api_router.get("/home/", status_code=200)
def home(request: Request) -> HTMLResponse:
    context = {"request": request}
    return TEMPLATES.TemplateResponse("index.html", context)


# TODO load the projects files from db
@api_router.get("/projects/", status_code=200)
def projects(request: Request) -> HTMLResponse:
    context = {"request": request}
    return TEMPLATES.TemplateResponse("projects.html", context)


# TODO load the blogs from db
@api_router.get("/blog/", status_code=200)
def blog(request: Request) -> HTMLResponse:
    context = {"request": request}
    return TEMPLATES.TemplateResponse("blog.html", context)


# TODO load the blogs from db
@api_router.get("/braindump/", status_code=200)
def blog(request: Request) -> HTMLResponse:
    context = {"request": request}
    return TEMPLATES.TemplateResponse("blog.html", context)


app.include_router(api_router)
app.mount("/assets", StaticFiles(directory=str(BASE_PATH.parent.joinpath("assets"))), name="assets")
app.mount("/blogs", StaticFiles(directory=str(BASE_PATH.parent.joinpath("blogs"))), name="blogs")


if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=8001, log_level="debug")    
