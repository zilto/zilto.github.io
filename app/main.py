from pathlib import Path
import json

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
    all_projects = [{"name": "cribbage", "html_url": "https://github.com/zilto/cribbage", "created_at": "2022-02-21T02:48:50Z"}, {"name": "ExcelQueryFormatter", "html_url": "https://github.com/zilto/ExcelQueryFormatter", "description": "Executable containing a python + pandas script to format Excel files", "created_at": "2020-08-05T00:21:19Z"}, {"name": "hamilton", "html_url": "https://github.com/zilto/hamilton", "description": "A scalable general purpose micro-framework for defining dataflows. You can use it to create dataframes, numpy matrices, python objects, ML models, etc.", "created_at": "2022-07-24T21:49:50Z"}, {"name": "Honor-Thesis_friends-family", "html_url": "https://github.com/zilto/Honor-Thesis_friends-family", "description": "Predict next-day stress and happiness level using smartphone sensor data", "created_at": "2021-12-22T03:53:08Z"}, {"name": "IFT6390-Comp1", "html_url": "https://github.com/zilto/IFT6390-Comp1", "description": "IFT6390 - Kaggle competition #1 at https://www.kaggle.com/c/ift3395-6390-weatherevents", "created_at": "2021-12-15T15:47:47Z"}, {"name": "IFT6390-Comp2", "html_url": "https://github.com/zilto/IFT6390-Comp2", "description": "IFT6390 - Kaggle competition #2 at https://www.kaggle.com/c/cropharvest-crop-detection", "created_at": "2021-11-21T23:45:17Z"}, {"name": "imgur_archive", "html_url": "https://github.com/zilto/imgur_archive", "description": "Simple Python script to download Imgur content", "created_at": "2021-12-22T00:56:14Z"}, {"name": "IPWS-2021_TDAM", "html_url": "https://github.com/zilto/IPWS-2021_TDAM", "description": "Presentation given to TD Asset Managements representatives by the end of the 11th Industrial Problem Solving Workshop ", "created_at": "2021-12-15T15:59:29Z"}, {"name": "passe-passe", "html_url": "https://github.com/zilto/passe-passe", "description": "CLI tool to encrypt and store credentials", "created_at": "2020-11-02T01:22:47Z"}, {"name": "spotify_webapp", "html_url": "https://github.com/zilto/spotify_webapp", "description": "A small web app to download Spotify content to your device", "created_at": "2022-04-24T23:27:16Z"}, {"name": "streamlit_webapp", "html_url": "https://github.com/zilto/streamlit_webapp", "created_at": "2022-04-10T00:19:13Z"}, {"name": "zilto.github.io", "html_url": "https://github.com/zilto/zilto.github.io", "created_at": "2021-02-03T03:58:45Z"}]
    # all_projects = json.load("/projectsf/projects.json")
    context = {"request": request, "all_projects": all_projects}
    return TEMPLATES.TemplateResponse("projects.html", context)


# TODO load the blogs from db
@api_router.get("/blog/", status_code=200)
def blog(request: Request) -> HTMLResponse:
    context = {"request": request}
    return TEMPLATES.TemplateResponse("blog.html", context)


@api_router.get("/braindump/", status_code=200)
def braindump(request: Request) -> HTMLResponse:
    context = {"request": request}
    return TEMPLATES.TemplateResponse("braindump.html", context)


app.include_router(api_router)

app.mount("/assets", StaticFiles(directory=str(BASE_PATH.parent.joinpath("assets"))), name="assets")
app.mount("/blogs", StaticFiles(directory=str(BASE_PATH.parent.joinpath("blogs"))), name="blogs")


if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=8001, log_level="debug")    
