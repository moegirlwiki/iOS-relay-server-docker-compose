# iOS-relay-server-docker-compose

Clone this file 
```
git clone git@github.com:moegirlwiki/iOS-relay-server-docker-compose.git
```

Create `.env` file with the following parameter
```
API_URL=https://zh.moegirl.org/api.php
BACKEND_URL=https://zh.moegirl.org/index.php
MYSQL_DB_NAME=____________________
MYSQL_USER=____________________
MYSQL_PASSWORD=____________________
MYSQL_ROOT_PASSWORD=____________________

PMA_ABSOLUTE_URI=https://example.com/pma/
MYSQL_ADDRESS=0.0.0.0:3368
PMA_ADDRESS=127.0.0.1:3369
PROXY_ADDRESS=127.0.0.1:8085
```


Configure `nginx.conf` file, and link to the actual nginx running on the host machine


`docker-compose pull && docker-compose up -d`
