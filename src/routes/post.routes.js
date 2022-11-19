import { Router } from "express";
import postCtrl from "../controllers/post.controller.js";
import { authClient } from "../middleware/auth.js";
import { upload } from "../middleware/imgUpload.js";

const route = Router();

route.get("/", authClient,postCtrl.list);
route.get("/user", authClient,postCtrl.listWithLogin);
route.get("/:id",authClient, postCtrl.listOne);
route.delete("/:id",authClient, postCtrl.delete);
route.put("/:id",authClient, upload.single("img"),postCtrl.update);
route.post("/",authClient, upload.single("img"), postCtrl.add);

export default route;