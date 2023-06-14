import { Router } from "express";
import { methods as documentosController } from "../controllers/documentos.controller";

const router = Router();

router.get("/", documentosController.getDocumentos);
router.get("/:Id", documentosController.findDocumentos);
router.post("/", documentosController.addDocumentos);
router.put("/:Id", documentosController.updateDocumentos);
router.delete("/:Id", documentosController.deleteDocumentos);

export default router;
