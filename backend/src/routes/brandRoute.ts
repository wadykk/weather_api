import express from "express";
import { getBrandData } from "../controllers/brandController.js";
import { validateBrandName } from "../middleware/brandValidator.js";

// We will create a router object
const router = express.Router();

// We will create a route for the weather data based on the city name
router.get("/:brand", validateBrandName, getBrandData);

// We will export the router
export default router;