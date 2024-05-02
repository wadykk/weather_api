import { faker } from "@faker-js/faker";
import { storeSupercarData } from "../helpers/helper.js";

export const generateMercedesSupercarData = (): SupercarData => {
  // Generate random supercar data
  const generatedSupercarData: SupercarData = {
    model: "Mercedes",
    engine: faker.number.int({ min: 2.0, max: 10.0 }),
    enginepower: faker.number.int({ min: 500, max: 1200 }),
    doors:faker.number.int({ min: 1, max: 2 }),
    year: faker.number.int({ min: 2005, max: 2024 }),
    fuelconsumption: faker.number.int({ min: 5, max: 30 }),
  };
   storeSupercarData(generatedSupercarData).catch(console.error);
  // Return supercar data
  return generatedSupercarData;
};

export const generateAudiSupercarData = (): SupercarData => {
  // Generate random supercar data
  const generatedSupercarData: SupercarData = {
    model: "Audi",
    engine: faker.number.int({ min: 2.0, max: 10.0 }),
    enginepower: faker.number.int({ min: 500, max: 1200 }),
    doors:faker.number.int({ min: 1, max: 2 }),
    year: faker.number.int({ min: 2005, max: 2024 }),
    fuelconsumption: faker.number.int({ min: 5, max: 30 }),
  };
   storeSupercarData(generatedSupercarData).catch(console.error);
  // Return supercar data
  return generatedSupercarData;
};

export const generateLamborghiniSupercarData = (): SupercarData => {
    // Generate random supercar data
    const generatedSupercarData: SupercarData = {
      model: "Lamborghini",
      engine: faker.number.int({ min: 2.0, max: 10.0 }),
      enginepower: faker.number.int({ min: 500, max: 1200 }),
      doors:faker.number.int({ min: 1, max: 2 }),
      year: faker.number.int({ min: 2005, max: 2024 }),
      fuelconsumption: faker.number.int({ min: 5, max: 30 }),
    };
     storeSupercarData(generatedSupercarData).catch(console.error);
    // Return supercar data
    return generatedSupercarData;
  };

  export const generateFerrariSupercarData = (): SupercarData => {
    // Generate random supercar data
    const generatedSupercarData: SupercarData = {
      model: "Ferrari",
      engine: faker.number.int({ min: 2.0, max: 10.0 }),
      enginepower: faker.number.int({ min: 500, max: 1200 }),
      doors:faker.number.int({ min: 1, max: 2 }),
      year: faker.number.int({ min: 2005, max: 2024 }),
      fuelconsumption: faker.number.int({ min: 5, max: 30 }),
    };
     storeSupercarData(generatedSupercarData).catch(console.error);
    // Return supercar data
    return generatedSupercarData;
  };

  export const generateAstonSupercarData = (): SupercarData => {
    // Generate random supercar data
    const generatedSupercarData: SupercarData = {
      model: "Aston martin",
      engine: faker.number.int({ min: 2.0, max: 10.0 }),
      enginepower: faker.number.int({ min: 500, max: 1200 }),
      doors:faker.number.int({ min: 1, max: 2 }),
      year: faker.number.int({ min: 2005, max: 2024 }),
      fuelconsumption: faker.number.int({ min: 5, max: 30 }),
    };
     storeSupercarData(generatedSupercarData).catch(console.error);
    // Return supercar data
    return generatedSupercarData;
  };

  export const generateBentleySupercarData = (): SupercarData => {
    // Generate random supercar data
    const generatedSupercarData: SupercarData = {
      model: "Bentley",
      engine: faker.number.int({ min: 2.0, max: 10.0 }),
      enginepower: faker.number.int({ min: 500, max: 1200 }),
      doors:faker.number.int({ min: 1, max: 2 }),
      year: faker.number.int({ min: 2005, max: 2024 }),
      fuelconsumption: faker.number.int({ min: 5, max: 30 }),
    };
     storeSupercarData(generatedSupercarData).catch(console.error);
    // Return supercar data
    return generatedSupercarData;
  };

  export const generateMaseratiSupercarData = (): SupercarData => {
    // Generate random supercar data
    const generatedSupercarData: SupercarData = {
      model: "Maserati",
      engine: faker.number.int({ min: 2.0, max: 10.0 }),
      enginepower: faker.number.int({ min: 500, max: 1200 }),
      doors:faker.number.int({ min: 1, max: 2 }),
      year: faker.number.int({ min: 2005, max: 2024 }),
      fuelconsumption: faker.number.int({ min: 5, max: 30 }),
    };
     storeSupercarData(generatedSupercarData).catch(console.error);
    // Return supercar data
    return generatedSupercarData;
  };