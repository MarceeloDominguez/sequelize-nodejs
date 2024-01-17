import express from "express";
import tasksRouter from "./routes/tasks.routes.js";
import subtasksRouter from "./routes/subtasks.routes.js";
import { sequelize } from "./database/connection.js";
// import "./models/task.model.js";
// import "./models/subtask.model.js";

const app = express();

app.use(express.json());

app.use("/api/tasks", tasksRouter);
app.use("/api/subtasks", subtasksRouter);

const PORT = process.env.PORT || 5000;

async function main() {
  try {
    await sequelize.sync({ force: false });

    app.listen(PORT, () => {
      console.log(`Server in port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();
