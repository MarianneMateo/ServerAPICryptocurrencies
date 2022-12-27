import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Crypto = db.define(
  "cryptocurrencies",
  {
    id_crypto: { type: DataTypes.STRING, allowNull: false, primaryKey: true },
    id_user: { type: DataTypes.INTEGER, allowNull: false },
    name_crypto: { type: DataTypes.STRING, allowNull: false },
    photo: { type: DataTypes.STRING, allowNull: false },
    amount: { type: DataTypes.DECIMAL(12, 2), allowNull: false },
  },
  {
    freezeTableName: true,
  }
);

export default Crypto;

(async () => {
  await db.sync();
})();
