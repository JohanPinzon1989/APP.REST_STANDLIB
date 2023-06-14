import { Router } from "express";
import { methods as h_fController } from "../controllers/historialFacturacion.controller";

const router = Router();

router.get("/", h_fController.getH_f);
router.get("/:Id", h_fController.findH_f);
router.post("/", h_fController.addH_f);
router.put("/:Id", h_fController.updateH_f);
router.delete("/:Id", h_fController.deleteH_f);

export default router;
