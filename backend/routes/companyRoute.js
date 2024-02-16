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

route.get('/file/:fp', function (req, res) {
    const filePath = req.params.fp;

    console.log(filePath);
    // find out the filePath based on given fileName
    res.sendFile("/" + filePath);
});
// route.post("/fileupload", uploadMiddleware.single("myfile"), uploadFile);


export default route;