if [[ $1 == 'stop' ]]; 
then
  docker-compose down
elif [[ $1 == 'log' ]];
then
  docker-compose logs -f auth-app;
else
  docker-compose up -d --build;
fi
