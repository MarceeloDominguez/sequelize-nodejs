import { SubTask } from "../models/subtask.model.js";
import { Task } from "../models/task.model.js";

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findOne({
      where: { id },
    });

    if (!task) return res.status(404).json({ message: "Task does not exists" });

    res.json(task);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createTask = async (req, res) => {
  const { title, description, startDate, finalDate, done } = req.body;

  try {
    const newTask = await Task.create({
      title,
      description,
      startDate,
      finalDate,
      done,
    });

    res.json(newTask);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    await Task.destroy({
      where: { id },
    });

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updatedTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, startDate, finalDate } = req.body;

    const task = await Task.findByPk(id);
    task.title = title;
    task.description = description;
    task.startDate = startDate;
    task.finalDate = finalDate;

    await task.save();

    res.json(task);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getTaskSubtasks = async (req, res) => {
  const { id } = req.params;
  const subtasks = await SubTask.findAll({
    where: { taskId: id },
  });

  res.json(subtasks);
};

export const taskController = {
  getAllTasks,
  getTask,
  createTask,
  deleteTask,
  updatedTask,
  getTaskSubtasks,
};
