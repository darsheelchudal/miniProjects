import express from "express";
import tasks from "./routes/tasks.js";
import dotenv from "dotenv";
import connectDB from "./database/connectDB.js";

dotenv.config();

const app = express();

//Middlewares
app.use(express.json());

//Routes
app.get("/", (req, res) => {
  res.status(200).send("Task Manager App");
});

app.use("/api/v1/tasks", tasks);

//  get("/api/v1/tasks") -get all the tasks
//  post("/api/v1/tasks") -create a new tasks
//  get("/api/v1/tasks/:id") -get single task
//  patch("/api/v1/tasks/:id") -update task
//  delete("/api/v1/tasks/:id") -delete task

const PORT = 8000;

//connection to database
const connectionStart = async () => {
  try {
    await connectDB();
    app.listen(PORT, console.log(`Server is listening at Port ${PORT}`));
  } catch (error) {
    console.log("Error", error);
  }
};
connectionStart();
