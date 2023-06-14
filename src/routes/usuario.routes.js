import { Router } from "express";
import { methods as usController } from "../controllers/usuario.controller";

const router = Router();

router.get("/", usController.getUs);
router.get("/:Id", usController.findUs);
router.post("/", usController.addUs);
router.put("/:Id", usController.updateUs);
router.delete("/:Id", usController.deleteUs);

export default router;
