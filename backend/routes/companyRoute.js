import express from "express";
import { create, deleteCompany, fetch, searchCompany, update } from "../controller/companyController.js";
import uploadMiddleware from "../middleware/uploadMiddleware.js";

const route = express.Router();

route.post("/create", uploadMiddleware.single("myfile"), create);
route.get("/fetch", fetch);
route.put("/update/:id", update);
route.delete("/delete/:id", deleteCompany);
route.post("/search", searchCompany);
// route.post("/fileupload", uploadMiddleware.single("myfile"), uploadFile);


export default route;