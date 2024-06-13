import express from "express";

const app = express();

//Routes
app.get("/", (req, res) => {
  res.status(200).send("Task Manager App");
});

//  ("/api/v1/tasks") -get all the tasks
//  ("/api/v1/tasks") -create a new tasks
//  ("/api/v1/tasks/:id") -get single tasks
//  ("/api/v1/tasks/:id") -update task
//  ("/api/v1/tasks/:id") -delete task

const PORT = 8000;
app.listen(PORT, console.log(`Server is listening at Port ${PORT}...`));
