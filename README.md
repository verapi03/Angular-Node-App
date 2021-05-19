# Angular-Node-App

This is an app in Angular that connects to the BE through an API made with Express.js

The project has two folders: frontend and backend. The frontend is written in Angular and consumes 3 services exposed by an API written in Node.js.

The backend uses mongoose to connect to MongoDB Atlas to write and read data. It exposes three endpoints for the frontend to consume, namely:

[GET] http://localhost:3000/api/technologies

[GET] http://localhost:3000/api/technology/{id}

[GET] http://localhost:3000/api/technology/search/{name}

To see this project working:

1) Create a new DB in MongoDB Atlas
2) Clone the project
3) In the root of the project create a .env file and paste in there the MongoDB Atlas connection string, like this:
   PORT=3000
   MONGO_URI="mongodb+srv://<userName>:<password>@cluster0.ggj8f.mongodb.net/<databaseName>?retryWrites=true&w=majority"
5) Install the project's dependencies: "npm install"
6) Populate the DB by running "npm run seed"
7) Get the server up with "npm run dev" (or "npm start")
8) You should be able on your browser to go to http://localhost:3000/img/node.svg and see the Node.js logo
9) Get the frontend up and running by going to "../frontend" and executing "ng serve"
10) On your browser go to http://localhost:4200/ and start using the app
