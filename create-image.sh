#!/usr/bin/env bash

docker rm -f notification-service

docker rmi notification-service -f

docker image prune -f

docker volume prune -f

docker build -t notification-service .
