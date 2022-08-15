from pathlib import Path

from fastapi import APIRouter, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates


BASE_PATH = Path(__file__).resolve().parent.parent
TEMPLATES = Jinja2Templates(directory=str(BASE_PATH.joinpath("templates")))
router = APIRouter(
    prefix="/blog",
    tags=["blog"]
)

@router.get("/", response_class=HTMLResponse)
def list_blogs(request: Request) -> HTMLResponse:
    context = {"request": Request}
    return TEMPLATES.TemplateResponse("blog.html", context)