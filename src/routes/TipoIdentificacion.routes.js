import { Router } from "express";
import { methods as t_iController } from "../controllers/TipoIdentificacion.controller";

const router = Router();

router.get("/", t_iController.getT_i);
router.get("/:Id", t_iController.findT_i);
router.post("/", t_iController.addT_i);
router.put("/:Id", t_iController.updateT_i);
router.delete("/:Id", t_iController.deleteT_i);

export default router;
