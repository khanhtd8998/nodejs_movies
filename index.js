import express from "express";
import router from "./src/routes/index.js";
import connectMongoDB from "./src/ultils/connect.js";
import { PORT } from "./src/ultils/env.js";
import { errorHandler, errorHandlerNotFound } from "./src/ultils/errorHandler.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectMongoDB()

app.use('/api', router)
app.use(errorHandlerNotFound, errorHandler);

app.listen(PORT, () => {
    console.log("Connecting to port " + PORT);
})

;