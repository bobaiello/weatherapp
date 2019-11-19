
docker images|awk '{ print "docker rmi -f " $3 }' > foo.sh
