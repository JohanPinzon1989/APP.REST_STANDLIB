import { Router } from "express";
import { methods as planesController } from "../controllers/planes.controller";

const router = Router();

router.get("/", planesController.getPlanes);
router.get("/:Id", planesController.findPlanes);
router.post("/", planesController.addPlanes);
router.put("/:Id", planesController.updatePlanes);
router.delete("/:Id", planesController.deletePlanes);

export default router;
