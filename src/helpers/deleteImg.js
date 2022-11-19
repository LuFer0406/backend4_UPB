import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import {promisify} from "util";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const deleteImg = async(nameImage) => {
    promisify(fs.unlink)(path.resolve(__dirname, "../storage/imgs", nameImage))
};