
docker images|grep -v IMAGE|awk '{ print "docker rmi -f " $3 }' > foo.sh
