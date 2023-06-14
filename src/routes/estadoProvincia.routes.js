import { Router } from "express";
import { methods as e_pController } from "../controllers/estadoProvincia.controller";

const router = Router();

router.get("/", e_pController.getE_p);
router.get("/:Id", e_pController.findE_p);
router.post("/", e_pController.addE_p);
router.put("/:Id", e_pController.updateE_p);
router.delete("/:Id", e_pController.deleteE_p);

export default router;
