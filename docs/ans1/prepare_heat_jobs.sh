#!/bin/bash
docker exec $(docker ps -qf "ancestor=10.16.0.2:5000/avito-heat-prepare:latest" | head -n 1) /node/dist-node18/prepare_heat_jobs.sh &>> prepare-heat.log
