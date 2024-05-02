import { param } from "express-validator";

/**
 * Validates the city name param
 * @returns {ValidationChain} - Express validator validation chain
 * @example
 * router.get(
 *  "/:city",
 * validateModelName,
 * getSupercarData
 * );
 */
export const validateModelName = param("model")
  // We will use the isString method to check if the city param is a string
  .isString()
  // We will use the isIn method to check if the city param is either london or dublin
  .isIn(["mercedes", "audi","lamborghini", "ferrari","aston martin", "bentley", "maserati"])
  // We will use the withMessage method to set a custom error message
  .withMessage("Model name must be mercedes or dublin");
