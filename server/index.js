import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./database/db.js";
import todoRoute from "./routes/todoRoute.js";

dotenv.config({});

connectDB();
const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use(cors());
 
app.use("/api/todo", todoRoute);
 
 
app.listen(PORT, () => {
    console.log(`Server listen at port ${PORT}`);
})


