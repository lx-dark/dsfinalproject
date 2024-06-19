import express from "express";
import { getServices, addService, updateService, deleteService } from "../controllers/serviceController.js";

const router = express.Router();
router.get("/", getServices);
router.post("/", addService);
router.put("/:idservice", updateService);
router.delete("/:idservice", deleteService);

export default router;
