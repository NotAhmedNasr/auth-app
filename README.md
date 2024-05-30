# Auth App

A simple Node.js web application made with NestJS.

## Features

- Simple Authentication module with two endpoints for `Sign Up` and `Sign In`.
- A health check module to monitor the connection with the DB.

## Technologies

- NestJS as a web framework.
- MongoDB as the main DB.
- Docker and Docker compose for local development environment

## Deployments

- The application is hosted on [render.com](https://render.com) on URL [auth-app](https://auth-app-fkjz.onrender.com).
- The MongoDB is deployed on a free M0 MongoDB cluster.

## Endpoints

- GET /health
  - Returns the Status of the DB.
    - code: 200
  ```JSON
  {
    "status": "ok",
    "info": {
        "DB": {
            "status": "up"
        }
    },
    "error": {},
    "details": {
        "DB": {
            "status": "up"
        }
    }
  }
  ```
- POST /auth/sign-up

  - creates a new user with the provided data
  - Sample request body

  ```JSON
  {
    "email": "email@example.com",
    "name": "John Doe",
    "password": "########"
  }
  ```

  - Sample response
    - code: 201

  ```JSON
  {
    "token": "the created jwt",
    "user": {
      "email": "email@example.com",
      "name": "John Doe",
      "createdAt": "2024-05-29T23:41:02.390Z",
      "updatedAt": "2024-05-29T23:41:02.390Z",
      "id": "6657bd0e44110c5cf7928400"
    }
  }
  ```

- POST /auth/sign-in

  - signs in the user using email and password
  - Sample request body

  ```JSON
  {
    "email": "email@example.com",
    "password": "########"
  }
  ```

  - Sample response
    - code: 200

  ```JSON
  {
    "token": "the created jwt",
    "user": {
      "email": "email@example.com",
      "name": "John Doe",
      "createdAt": "2024-05-29T23:41:02.390Z",
      "updatedAt": "2024-05-29T23:41:02.390Z",
      "id": "6657bd0e44110c5cf7928400"
    }
  }
  ```

## Local development (via Docker with MongoDB)

1. Clone the repository locally.
2. Make sure you Node.js v18.19.0 or later is installed on the machine.
3. install the NestJS cli via `npm install -g @nestjs/cli`.
4. run the command `npm install` in the root directory.
5. run the bash script `bash dev.sh build` to build the image for the first time.

The application should be up and running in the development mode. You can access the application on [http://localhost:3000](http://localhost:3000).

To stop the application, run the `bash dev.sh stop`

To redeploy the project after making changes to the `docker-compose.yml` file, run `bash dev.sh`. This will only redeploy the docker-compose project without building the image again.

## Local development (application only)

1. Clone the repository locally.
2. Make sure you Node.js v18.19.0 or later is installed on the machine.
3. install the NestJS cli via `npm install -g @nestjs/cli`.
4. run the command `npm install` in the root directory.
5. Make a new `.env` file. Use .env.example as a template.
6. Add the MongoDB connection string and the JWT secret
7. start the application by running `npm run start:dev`.

The application should be up and running in the development mode. You can access the application on [http://localhost:3000](http://localhost:3000).
