import { Router } from "express";
import { methods as organismosController } from "../controllers/organismos.Controller";

const router = Router();

router.get("/", organismosController.getOrg);
router.get("/:Id", organismosController.findOrg);
router.post("/", organismosController.addOrg);
router.put("/:Id", organismosController.updateOrg);
router.delete("/:Id", organismosController.deleteOrg);

export default router;
