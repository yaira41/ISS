import express from "express";
import { getUtmLocation } from "../controllers/utm.controllers";

const router = express.Router();

/**
 * @swagger
 * /api/utm:
 *   get:
 *     summary: Get the current location of the ISS in UTM
 *     responses:
 *       200:
 *         description: ISS location in UTM
 */
router.get("/", getUtmLocation);

export default router;
