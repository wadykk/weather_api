import express from "express";
import { getSupercarData } from "../controllers/supercarController.js";
import { validateModelName } from "../middleware/supercarValidator.js";

// We will create a router object
const router = express.Router();

// We will create a route for the supercar data based on the model of the supercar
router.get("/:model", validateModelName, getSupercarData);

// We will export the router
export default router;