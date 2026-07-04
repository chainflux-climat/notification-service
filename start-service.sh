# !/usr/bin/env bash

# docker service create --replicas 2 --name notification-service -l=apiRoute='/goldtrace' -p 3004:3000 104.154.26.100:5000/notification-service
# docker run --name notification-service -p 3000:3000 notification-service