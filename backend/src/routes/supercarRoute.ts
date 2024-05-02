import express from "express";
import { getSupercarData } from "../controllers/supercarController.js";
import { validateModelName } from "../middleware/supercarValidator.js";

// We will create a router object
const router = express.Router();

// We will create a route for the weather data based on the city name
router.get("/:model", validateModelName, getSupercarData);

// We will export the router
export default router;