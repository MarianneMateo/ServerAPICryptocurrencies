import { Sequelize } from "sequelize";

const db = new Sequelize("Crypto", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
