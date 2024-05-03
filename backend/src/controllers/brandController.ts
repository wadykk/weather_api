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
 * Gets the phone brand data for a brand
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
    // Get the phone brand param from the request
    const { brand } = req.params;
    console.log(brand);

    // We will create a variable with a type of Brand Data
    let finalBrandData: BrandData;

    // We will use an if statement to check which brand was passed in
    if (brand === "apple") {
      console.log(generateAppleBrandData());
      finalBrandData = generateAppleBrandData();
    } else if (brand === "samsung") {
      finalBrandData = generateSamsungBrandData();
    } else if (brand === "lenovo") {
        finalBrandData = generateLenovoBrandData();
    } else if (brand === "nokia") {
        finalBrandData = generateNokiaBrandData();
    } else if (brand === "google") {
        finalBrandData = generateGoogleBrandData();
    } else if (brand === "lg") {
        finalBrandData = generateLGBrandData();
    } else if (brand === "sony") {
        finalBrandData = generateSonyBrandData();
    } else {
      // If the phone brand is not one of the above, we will throw an error
      res.status(404).send("Phone brand not found");
    }

    // We will return the brand data as JSON
    res.status(200).json(finalBrandData);
  } catch (error) {
    // If there is an error, we will log it and send a 500 status code
    res.status(500).send("Error in fetching phone brand data");
  }
};
