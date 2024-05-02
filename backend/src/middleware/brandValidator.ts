import { param } from "express-validator";

/**
 * Validates the city name param
 * @returns {ValidationChain} - Express validator validation chain
 * @example
 * router.get(
 *  "/:model",
 * validateModelName,
 * getSupercarData
 * );
 */
export const validateBrandName = param("model")
  // We will use the isString method to check if the city param is a string
  .isString()
  // We will use the isIn method to check if the city param is either london or dublin
  .isIn(["apple", "samsung","lenovo", "nokia","google", "lg", "sony"])
  // We will use the withMessage method to set a custom error message
  .withMessage("Model name must be apple, samsung, lenovo, nokia, google, lg or sony");
