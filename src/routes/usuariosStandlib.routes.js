import { Router } from "express";
import { methods as u_sController } from "../controllers/usuariosStandlib.controller";

const router = Router();

router.get("/", u_sController.getU_s);
router.get("/:Id", u_sController.findU_s);
router.post("/", u_sController.addU_s);
router.put("/:Id", u_sController.updateU_s);
router.delete("/:Id", u_sController.deleteU_s);

export default router;
