import { Router } from "express";
import { methods as paisController } from "../controllers/pais.controller";

const router = Router();

router.get("/", paisController.getPais);
router.post("/", paisController.addPais);

export default router;
