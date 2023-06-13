import { Router } from "express";
import { methods as r_u_eController } from "../controllers/rolUsuarioEmpres.controller";

const router = Router();

router.get("/", r_u_eController.getR_u_e);
router.get("/:Id", r_u_eController.findR_u_e);
router.post("/", r_u_eController.addR_u_e);
router.put("/:Id", r_u_eController.updateR_u_e);
router.delete("/:Id", r_u_eController.deleteR_u_e);

export default router;
