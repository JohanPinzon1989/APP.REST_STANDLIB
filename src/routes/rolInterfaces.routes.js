import { Router } from "express";
import { methods as r_iController } from "../controllers/rolInterfaces.controller";

const router = Router();

router.get("/", r_iController.getR_i);
router.get("/:Id", r_iController.findR_i);
router.post("/", r_iController.addR_i);
router.put("/:Id", r_iController.updateR_i);
router.delete("/:Id", r_iController.deleteR_i);

export default router;
