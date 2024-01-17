import { DataTypes } from "sequelize";
import { sequelize } from "../database/connection.js";

export const SubTask = sequelize.define("subTasks", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  description: {
    type: DataTypes.STRING,
  },
  done: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});


