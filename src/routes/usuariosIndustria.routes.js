import { Router } from "express";
import { methods as u_iController } from "../controllers/usuariosIndustria.controller";

const router = Router();

router.get("/", u_iController.getU_i);
router.get("/:Id", u_iController.findU_i);
router.post("/", u_iController.addU_i);
router.put("/:Id", u_iController.updateU_i);
router.delete("/:Id", u_iController.deleteU_i);

export default router;
