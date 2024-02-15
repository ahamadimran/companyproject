import express from "express";
import { create, deleteCompany, fetch, searchCompany, update, fetchById } from "../controller/companyController.js";
import uploadMiddleware from "../middleware/uploadMiddleware.js";

const route = express.Router();

route.post("/create", uploadMiddleware.single("myfile"), create);
route.get("/fetch", fetch);
route.get("/fetch/:id", fetchById);
route.put("/update/:id", update);
route.delete("/delete/:id", deleteCompany);
route.post("/search", searchCompany);
route.get("/uploads/")
// route.post("/fileupload", uploadMiddleware.single("myfile"), uploadFile);


export default route;