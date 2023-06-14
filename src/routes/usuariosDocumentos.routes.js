import { Router } from "express";
import { methods as u_dController } from "../controllers/usuariosDocumentos.controller";

const router = Router();

router.get("/", u_dController.getU_d);
router.get("/:Id", u_dController.findU_d);
router.post("/", u_dController.addU_d);
router.put("/:Id", u_dController.updateU_d);
router.delete("/:Id", u_dController.deleteU_d);

export default router;
