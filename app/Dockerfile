# syntax=docker/dockerfile:1.3
FROM python:3.10

WORKDIR /workspace

COPY requirements.txt /workspace/requirements.txt

RUN pip install --no-cache-dir --upgrade -r /workspace/requirements.txt

COPY . /workspace/app

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "80"]
