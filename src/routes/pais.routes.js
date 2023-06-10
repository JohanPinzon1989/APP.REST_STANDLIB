import { Router } from "express";
import { methods as paisController } from "../controllers/pais.controller";

const router = Router();

router.get("/", paisController.getPaises);
router.get("/:Id", paisController.findPais);
router.post("/", paisController.addPais);
router.put("/:Id", paisController.updatePais);
router.delete("/:Id", paisController.deletePais);

export default router;
