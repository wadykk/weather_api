import { Request, Response } from "express";
import {
  generateAppleBrandData,
  generateSamsungBrandData,
  generateLenovoBrandData,
  generateNokiaBrandData,
  generateGoogleBrandData,
  generateLGBrandData,
  generateSonyBrandData,

} from "../services/brandService.js";
import { validationResult } from "express-validator";

/**
 * Gets the seismic data for a city
 * @param req the request object
 * @param res the response object
 */
export const getBrandData = async (req: Request, res: Response) => {
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

    // We will create a variable with a type of WeatherData
    let finalBrandData: BrandData;

    // We will use an if statement to check which city was passed in
    if (model === "apple") {
      console.log(generateAppleBrandData());
      finalBrandData = generateAppleBrandData();
    } else if (model === "samsung") {
      finalBrandData = generateSamsungBrandData();
    } else if (model === "lenovo") {
        finalBrandData = generateLenovoBrandData();
    } else if (model === "nokia") {
        finalBrandData = generateNokiaBrandData();
    } else if (model === "google") {
        finalBrandData = generateGoogleBrandData();
    } else if (model === "lg") {
        finalBrandData = generateLGBrandData();
    } else if (model === "sony") {
        finalBrandData = generateSonyBrandData();
    } else {
      // If the city is not london or dublin, we will throw an error
      res.status(404).send("Phone brand not found");
    }

    // We will return the brand data as JSON
    res.status(200).json(finalBrandData);
  } catch (error) {
    // If there is an error, we will log it and send a 500 status code
    res.status(500).send("Error in fetching phone brand data");
  }
};
