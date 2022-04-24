NODE=`docker-compose ps | grep npm | cut -d\  -f 1 | head -n 1`
# FILE=docker-compose.yml
FILE_PROD=docker-compose.prod.yml
ENV_STAGE = ``

#############
#PROD ACTIONS#
#############

build:
	docker-compose -f $(FILE_PROD) up -d --build

start:
	docker-compose -f $(FILE_PROD) start

stop:
	docker-compose -f $(FILE_PROD) stop

#############
#DEV ACTIONS#
#############

# build:
# 	docker-compose -f $(FILE) build

# up:
# 	docker-compose -f $(FILE) up -d

# start:
# 	docker-compose -f $(FILE) start

# stop:
# 	docker-compose -f $(FILE) stop

# clean: stop
# 	docker-compose rm -f

# restart: clean build up
# 	@echo "Restarted all containers"

########
#SHELLS#
########


shell-app:
	docker exec -ti $(NODE) bash

######
#LOGS#
######

log-app:
	docker-compose logs app

log-app-live:
	docker logs --tail 50 --follow --timestamps $(NODE)


