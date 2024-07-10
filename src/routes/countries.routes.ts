import express from "express";
import { getAllCountries } from "../controllers/countries.controllers";

const router = express.Router();

/**
 * @swagger
 * /api/countries:
 *   get:
 *     summary: Get all countries
 *     responses:
 *       200:
 *         description: List of countries
 */
router.get("/", getAllCountries);

export default router;
