import { faker } from "@faker-js/faker";
import { storeBrandData } from "../helpers/helper.js";

export const generateAppleBrandData = (): BrandData => {
  // Generate random weather data
  const generatedBrandData: BrandData = {
    model: "Apple",
    capacity: faker.number.int({ min: 4, max: 1028 }),
    colour: "Red",
  };
   storeBrandData(generatedBrandData).catch(console.error);
  // Return weather data
  return generatedBrandData;
};

export const generateSamsungBrandData = (): BrandData => {
    // Generate random weather data
    const generatedBrandData: BrandData = {
      model: "Samsung",
      capacity: faker.number.int({ min: 4, max: 1028 }),
      colour: "Black",
    };
     storeBrandData(generatedBrandData).catch(console.error);
    // Return weather data
    return generatedBrandData;
  };

  export const generateLenovoBrandData = (): BrandData => {
    // Generate random weather data
    const generatedBrandData: BrandData = {
      model: "Lenovo",
      capacity: faker.number.int({ min: 4, max: 1028 }),
      colour: "Yellow",
    };
     storeBrandData(generatedBrandData).catch(console.error);
    // Return weather data
    return generatedBrandData;
  };

  export const generateNokiaBrandData = (): BrandData => {
    // Generate random weather data
    const generatedBrandData: BrandData = {
      model: "Nokia",
      capacity: faker.number.int({ min: 4, max: 1028 }),
      colour: "Gray",
    };
     storeBrandData(generatedBrandData).catch(console.error);
    // Return weather data
    return generatedBrandData;
  };

  export const generateGoogleBrandData = (): BrandData => {
    // Generate random weather data
    const generatedBrandData: BrandData = {
      model: "Google",
      capacity: faker.number.int({ min: 4, max: 1028 }),
      colour: "White",
    };
     storeBrandData(generatedBrandData).catch(console.error);
    // Return weather data
    return generatedBrandData;
  };

  export const generateLGBrandData = (): BrandData => {
    // Generate random weather data
    const generatedBrandData: BrandData = {
      model: "LG",
      capacity: faker.number.int({ min: 4, max: 1028 }),
      colour: "Brown",
    };
     storeBrandData(generatedBrandData).catch(console.error);
    // Return weather data
    return generatedBrandData;
  };

  export const generateSonyBrandData = (): BrandData => {
    // Generate random weather data
    const generatedBrandData: BrandData = {
      model: "Sony",
      capacity: faker.number.int({ min: 4, max: 1028 }),
      colour: "Blue",
    };
     storeBrandData(generatedBrandData).catch(console.error);
    // Return weather data
    return generatedBrandData;
  };