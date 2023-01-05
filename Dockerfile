# syntax=docker/dockerfile:1.3
FROM nginx/unit:1.28.0-python3.10

COPY ./config/config.json /docker-entrypoint.d/config.json

RUN mkdir /build

COPY ./requirements.txt ./build/requirements.txt

RUN apt update && apt install -y python3-pip \
    && pip3 install --no-cache-dir --upgrade -r /build/requirements.txt \
    && apt remove -y python3-pip \
    && apt autoremove --purge -y \
    && rm -rf /var/lib/apt/lists/* /etc/apt/sources.list.d/*.list

COPY ./app ./build/app
WORKDIR build

EXPOSE 80

# CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "80"]
