import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import AccountRoute from "./routes/AccountRoute.js";
import CryptoRoute from "./routes/CryptoRoute.js";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "10mb" }));
app.use(UserRoute);
app.use(AccountRoute);
app.use(CryptoRoute);

app.listen(4000, () => console.log("Server up and running..."));
