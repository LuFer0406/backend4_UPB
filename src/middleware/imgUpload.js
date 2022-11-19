import {v4 as uuidv4} from "uuid";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Crear carpeta para almacenar las imágenes (en storage)
const storage = multer.diskStorage({
    destination: path.join(__dirname, "../storage/imgs"),
    filename: function(req, file, cb){
        cb(null, uuidv4() + path.extname(file.originalname).toLowerCase());
    },
});

// Función 'upload'
export const upload = multer({
    storage, 
    fileFilter:(req, file, cb) => {
        // console.log(file);
        const filetypes = /jpeg|jpg|png|svg/;

        // Evaluar el tipo de dato que me llega
        const mimetype = filetypes.test(file.mimetype);

        const extname = filetypes.test(path.extname(file.originalname));

        // Evaluar si las condiciones se cumpleron
        if (mimetype && extname) {
            return cb(null, true);
        }
        cb("Error: the file is not valid, it must be 'jpeg | jpg | png | svg'")
    }
})
