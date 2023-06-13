import { Router } from "express";
import { methods as e_uController } from "../controllers/EstadosUsuario.controller";

const router = Router();

router.get("/", e_uController.getE_u);
router.get("/:Id", e_uController.findE_u);
router.post("/", e_uController.addE_u);
router.put("/:Id", e_uController.updateE_u);
router.delete("/:Id", e_uController.deleteE_u);

export default router;
