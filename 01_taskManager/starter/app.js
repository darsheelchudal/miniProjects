import express from "express";
import tasks from "./routes/tasks.js";
import dotenv from "dotenv";
import connectDB from "./database/connectDB.js";
import notFound from "./middlewares/not-found.js";
import errorHandlerMiddleware from "./middlewares/error-handler.js";

dotenv.config();

const app = express();

//Middlewares
app.use(express.json());
app.use(express.static("./public"));

//routes
app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

//  get("/api/v1/tasks") -get all the tasks
//  post("/api/v1/tasks") -create a new tasks
//  get("/api/v1/tasks/:id") -get single task
//  patch("/api/v1/tasks/:id") -update task
//   delete("/api/v1/tasks/:id") -delete task

const PORT = process.env.PORT || 8000;

//connection to database
const connectionStart = async () => {
  try {
    await connectDB(process.env.MONGO_URI).then(() => {
      app.listen(PORT, console.log(`Server is listening at Port ${PORT}`));
      console.log("DB connected successfully");
    });
  } catch (error) {
    console.log("Error", error);
  }
};
connectionStart();
