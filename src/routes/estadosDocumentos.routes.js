import { Router } from "express";
import { methods as e_dController } from "../controllers/estadosDocumentos.Controller";

const router = Router();

router.get("/", e_dController.getE_d);
router.get("/:Id", e_dController.findE_d);
router.post("/", e_dController.addE_d);
router.put("/:Id", e_dController.updateE_d);
router.delete("/:Id", e_dController.deleteE_d);

export default router;
