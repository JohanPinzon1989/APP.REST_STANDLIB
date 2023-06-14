import { Router } from "express";
import { methods as r_dController } from "../controllers/registroDocumentos.controller";

const router = Router();

router.get("/", r_dController.getR_d);
router.get("/:Id", r_dController.findR_d);
router.post("/", r_dController.addR_d);
router.put("/:Id", r_dController.updateR_d);
router.delete("/:Id", r_dController.deleteR_d);

export default router;
