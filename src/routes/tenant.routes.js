import { Router } from "express";
import { methods as tenantController } from "../controllers/tenant.controller";

const router = Router();

router.get("/", tenantController.getTenant);
router.get("/:Id", tenantController.findTenant);
router.post("/", tenantController.addTenant);
router.put("/:Id", tenantController.updateTenant);
router.delete("/:Id", tenantController.deleteTenant);

export default router;
