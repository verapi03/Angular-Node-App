# Angular-Node-App

This is an app in Angular that connects to the BE through an API made with Express.js

The project has two folders: frontend and backend. The frontend is written in Angular and consumes 3 services exposed by an API written in Node.js.

The backend uses mongoose to connect to MongoDB Atlas to write and read data. It exposes three endpoints for the frontend to consume, namely:

[GET] http://localhost:3000/api/technologies

[GET] http://localhost:3000/api/technology/{id}

[GET] http://localhost:3000/api/technology/search/{name}

Because the backend and frontend are entirely decoupled, it would be possible to rewrite the frontend in React or any other technology without affecting the backend at all. In the same way the backend could be replaced entirely for a different technology without affecting the frontend as long as the new API has the same enpoints exposed.

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

   ![Screen Shot 2021-05-19 at 3 08 29 PM](https://user-images.githubusercontent.com/14207804/118878283-00fb6980-b8b5-11eb-8f52-2fb80459f4d7.png)

   ![Screen Shot 2021-05-19 at 3 13 22 PM](https://user-images.githubusercontent.com/14207804/118878402-21c3bf00-b8b5-11eb-9b56-ce17a543327e.png)

   ![Screen Shot 2021-05-19 at 3 10 30 PM](https://user-images.githubusercontent.com/14207804/118878453-31430800-b8b5-11eb-9a7b-1f5cbcc7970a.png)

   ![Screen Shot 2021-05-19 at 3 11 31 PM](https://user-images.githubusercontent.com/14207804/118878524-44ee6e80-b8b5-11eb-9239-7be78e4238b5.png)
   
   ![Screen Shot 2021-05-19 at 3 12 27 PM](https://user-images.githubusercontent.com/14207804/118878559-4ddf4000-b8b5-11eb-85ea-ac32260874e6.png)
