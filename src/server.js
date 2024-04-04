import express from "express";
import router from "./routes/index.js";
import connectMongoDB from "./ultils/connect.js";
import { PORT } from "./ultils/env.js";
import { errorHandler, errorHandlerNotFound } from "./ultils/errorHandler.js";

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