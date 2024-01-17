import Sequelize from "sequelize";

export const sequelize = new Sequelize("tasksdb", "postgres", "root", {
  host: "localhost",
  dialect: "postgres",
});
