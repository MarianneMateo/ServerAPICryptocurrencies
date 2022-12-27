import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Account = db.define(
  "accounts",
  {
    id_account: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    id_user: { type: DataTypes.INTEGER, allowNull: false },
    account: { type: DataTypes.BIGINT(9), allowNull: false },
    amount: { type: DataTypes.DECIMAL(12, 2), allowNull: false },
  },
  {
    freezeTableName: true,
  }
);

export default Account;

(async () => {
  await db.sync();
})();
