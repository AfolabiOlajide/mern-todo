import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import 'dotenv/config'

// local imports 
import allRoutes from "./routes/index.js"



const PORT = process.env.PORT || 8000;
const app = express();

// middleware
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(cookieParser());

// routes
app.use("/api", allRoutes);

// error handler
app.use((err, req, res, next) => {
    const status = err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    return res.status(status).json({ message, stack: err.stack });
})


const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.DB_CONNECTION_STRING);
        console.log("mongodb connected");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}


app.listen(PORT, ()=> {
    connectDB()
    console.log(`Running on Port: ${PORT}`);
})