import express from "express";
import dotenv from "dotenv";
import router from "./routes/index.js";
import connectMongoDB from "../config/dbconfig.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const port = process.env.PORT || 3000;
const URL_DB = process.env.URL_DB
connectMongoDB(URL_DB)
app.use('/api', router)
app.listen(port, () => {
    console.log("connecting to port " + port);
})

// export const viteNodeApp = app;