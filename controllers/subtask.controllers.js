import { SubTask } from "../models/subtask.model.js";

const getAllSubTasks = async (req, res) => {
  try {
    const subTasks = await SubTask.findAll();
    res.json(subTasks);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getSubTask = async (req, res) => {
  try {
    const { id } = req.params;
    const subtask = await SubTask.findOne({
      where: { id },
    });
    res.json(subtask);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createSubTasks = async (req, res) => {
  try {
    const { description, done, taskId } = req.body;

    const newSubtask = await SubTask.create({
      description,
      done,
      taskId,
    });

    res.json(newSubtask);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteSubTasks = async (req, res) => {
  try {
    const { id } = req.params;

    await SubTask.destroy({
      where: { id },
    });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updatedSubTasks = async (req, res) => {
  try {
    const { id } = req.params;
    const subtask = await SubTask.findOne({
      where: { id },
    });

    subtask.set(req.body);
    await subtask.save();

    return res.json(subtask);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const subtaskController = {
  getAllSubTasks,
  createSubTasks,
  deleteSubTasks,
  updatedSubTasks,
  getSubTask,
};
