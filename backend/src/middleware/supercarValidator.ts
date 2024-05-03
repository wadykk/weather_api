import { param } from "express-validator";

/**
 * Validates the model name param
 * @returns {ValidationChain} - Express validator validation chain
 * @example
 * router.get(
 *  "/:model",
 * validateModelName,
 * getSupercarData
 * );
 */
export const validateModelName = param("model")
  // We will use the isString method to check if the model param is a string
  .isString()
  // We will use the isIn method to check if the model param is either mercedes, audi, lamborghini, ferrari, aston martin, bentley or maserati
  .isIn(["mercedes", "audi","lamborghini", "ferrari","aston martin", "bentley", "maserati"])
  // We will use the withMessage method to set a custom error message
  .withMessage("Model name must be mercedes, audi, lamborghini, ferrari, aston martin, bentley or maserati");
