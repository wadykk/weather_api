import { param } from "express-validator";

/**
 * Validates the brand name param
 * @returns {ValidationChain} - Express validator validation chain
 * @example
 * router.get(
 *  "/:brand",
 * validateBrandName,
 * getBrandData
 * );
 */
export const validateBrandName = param("brand")
  // We will use the isString method to check if the phone brand param is a string
  .isString()
  // We will use the isIn method to check if the brand param is either one of the below
  .isIn(["apple", "samsung","lenovo", "nokia","google", "lg", "sony"])
  // We will use the withMessage method to set a custom error message
  .withMessage("Brand name must be apple, samsung, lenovo, nokia, google, lg or sony");
