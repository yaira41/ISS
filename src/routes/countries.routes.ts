import express from "express";
import { getAllCountriesNames } from "../controllers/countries.controllers";

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
router.get("/", getAllCountriesNames);

export default router;
