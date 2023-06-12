import { Router } from "express";
import { methods as p_uController } from "../controllers/perfil_usuarios.controller";

const router = Router();

router.get("/", p_uController.getP_u);
router.get("/:Id", p_uController.findP_u);
router.post("/", p_uController.addP_u);
router.put("/:Id", p_uController.updateP_u);
router.delete("/:Id", p_uController.deleteP_u);

export default router;
