if [[ $1 == 'stop' ]]; 
then
  docker-compose down
elif [[ $1 == 'log' ]];
then
  docker-compose logs -f auth-app;
elif [[ $1 == 'build' ]];
then
  docker-compose up -d --build && bash dev.sh log;
else
  docker-compose up -d && bash dev.sh log;
fi
