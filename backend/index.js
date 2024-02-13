import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import route from "./routes/companyRoute.js";

const app = express();
app.use(bodyParser.json());
dotenv.config();

const PORT = process.env.PORT || 8000;
const MONGOURL = process.env.MONGO_URL;

mongoose.connect(MONGOURL).then(() => {
    console.log("Database Connected");
    app.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`);
    })
}).catch(error => console.log(error));

app.use("/api/company", route)