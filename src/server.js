import express from "express";
import dotenv from "dotenv";
import routes from "./routes/index.js";
import connectMongoDB from "../config/dbconfig.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
routes(app);

const port = process.env.PORT || 3000;
const URL_DB = process.env.URL_DB
connectMongoDB(URL_DB)
app.listen(port, () => console.log("Server is Running " + port));