import { DataTypes } from "sequelize";
import { sequelize } from "../database/connection.js";
import { SubTask } from "./subtask.model.js";

export const Task = sequelize.define(
  "tasks",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    startDate: {
      type: DataTypes.DATE,
    },
    finalDate: {
      type: DataTypes.DATE,
    },
    done: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    timestamps: false,
  }
);

Task.hasMany(SubTask, {
  foreignKey: "taskId",
  sourceKey: "id",
});

SubTask.belongsTo(Task, {
  foreignKey: "taskId",
  targetId: "id",
});
