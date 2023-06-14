import { Router } from "express";
import { methods as i_dController } from "../controllers/industriaDocumentos.controller";

const router = Router();

router.get("/", i_dController.getI_d);
router.get("/:Id", i_dController.findI_d);
router.post("/", i_dController.addI_d);
router.put("/:Id", i_dController.updateI_d);
router.delete("/:Id", i_dController.deleteI_d);

export default router;
