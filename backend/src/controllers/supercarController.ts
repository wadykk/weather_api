import { Request, Response } from "express";
import {
  generateMercedesSupercarData,
  generateAudiSupercarData,
  generateLamborghiniSupercarData,
  generateFerrariSupercarData,
  generateAstonSupercarData,
  generateBentleySupercarData,
  generateMaseratiSupercarData,
} from "../services/supercarService.js";
import { validationResult } from "express-validator";

/**
 * Gets the supercar data for a model
 * @param req the request object
 * @param res the response object
 */
export const getSupercarData = async (req: Request, res: Response) => {
  // We will use the validationResult function to check if there are any validation errors
  const errors = validationResult(req);

  // If there are validation errors, we will log them and send a 400 status code
  if (!errors.isEmpty()) {
    console.error("Validation error", errors.mapped());
    res.status(400).json({ errors: errors.array() });
    return;
  }

  // We will use a try catch block to catch any errors
  try {
    // Get the city param from the request
    const { model } = req.params;
    console.log(model);

    // We will create a variable with a type of SupercarData
    let finalSupercarData: SupercarData;

    // We will use an if statement to check which car model was passed in
    if (model === "mercedes") {
      console.log(generateMercedesSupercarData());
      finalSupercarData = generateMercedesSupercarData();
    } else if (model === "audi") {
      finalSupercarData = generateAudiSupercarData();
    } else if (model === "lamborghini") {
        finalSupercarData = generateLamborghiniSupercarData();
    } else if (model === "ferrari") {
        finalSupercarData = generateFerrariSupercarData();
    } else if (model === "aston martin") {
        finalSupercarData = generateAstonSupercarData();
    } else if (model === "bentley") {
        finalSupercarData = generateBentleySupercarData();
    } else if (model === "maserati") {
        finalSupercarData = generateMaseratiSupercarData();
    } else {
      // If the city is not any of the above, we will throw an error
      res.status(404).send("Supercar not found");
    }

    // We will return the supercar data as JSON
    res.status(200).json(finalSupercarData);
  } catch (error) {
    // If there is an error, we will log it and send a 500 status code
    res.status(500).send("Error in fetching seismic data");
  }
};
