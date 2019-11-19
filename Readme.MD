#Introduction

This is a simple microservice that I am orchestrating with Compose.
The original code comes from an example on LinuxAcademy and is based
upon the API examples provided by https://openweathermap.org/examples

##Scripts
One script modifies the config.js to choose which API resource to consume.
Another script encrypts the APIkeys generated by Openweathermap.org

##Assumptions
We assume that you have installed docker and docker compose on an Ubuntu linux VM

##Instructions
from the weatherapp directory (which is also where the docker-compose.yml is located)
we issue the command:

docker-compose up -d

And then we tail the docker-compose logs
docker-compose logs -f -t

To shut down compose we issue the command:
docker-compose down