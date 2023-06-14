import { Router } from "express";
import { methods as p_iController } from "../controllers/planesIndustria.controller";

const router = Router();

router.get("/", p_iController.getP_i);
router.get("/:Id", p_iController.findP_i);
router.post("/", p_iController.addP_i);
router.put("/:Id", p_iController.updateP_i);
router.delete("/:Id", p_iController.deleteP_i);

export default router;
