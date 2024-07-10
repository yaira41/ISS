import express from "express";
import { getIssLocation } from "../controllers/iss.controllers";

const router = express.Router();

/**
 * @swagger
 * /api/ISS:
 *   get:
 *     summary: Get the country the ISS is currently above
 *     responses:
 *       200:
 *         description: Country or "Ocean"
 */
router.get("/", getIssLocation);

export default router;
