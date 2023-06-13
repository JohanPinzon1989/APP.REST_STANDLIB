import { Router } from "express";
import { methods as industriaController } from "../controllers/industria.controller";

const router = Router();

router.get("/", industriaController.getIndustria);
router.get("/:Id", industriaController.findIndustria);
router.post("/", industriaController.addIndustria);
router.put("/:Id", industriaController.updateIndustria);
router.delete("/:Id", industriaController.deleteIndustria);

export default router;
