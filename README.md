this is a base node js project template, which anyone can use as it has been prepared by keeping some of the most important code principles and project management recommedations. feel free to change anything

'src'-> inside the src folder all the actual source code regarding the project will reside, this will not include any kind of tests.(you might want to make separate tests folder)

Lets take a look inside the `src` folder

    -  `config` ->In this folder anything and everything regarding any configuration    

    inside src/config folder create a file name as 
    
    `config.json` and write the following code

    ```
    {
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

if you are setting up your development environment, then write the username of your db, password of your db and in dialect mention whatever db you are using for ex: mysql, mariadb etc

if you're setting up your production environment, make sure you also replace the host with the hosted db url.