import multer from "multer";
import fs from "fs";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const directory = "./uploads";
        if(!fs.existsSync(directory)) {
            fs.mkdirSync(directory);
        }
        cb(null, directory);
    },

    filename: (req, file, cb) => {
        const fileName = `${Date.now()}-${file.originalname}`;
        cb(null, fileName);
    }
})

export default multer({storage});