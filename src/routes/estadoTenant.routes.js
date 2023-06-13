import { Router } from "express";
import { methods as e_tController } from "../controllers/estadotenant.controller";

const router = Router();

router.get("/", e_tController.getE_t);
router.get("/:Id", e_tController.findE_t);
router.post("/", e_tController.addE_t);
router.put("/:Id", e_tController.updateE_t);
router.delete("/:Id", e_tController.deleteE_t);

export default router;
