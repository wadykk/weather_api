import { faker } from "@faker-js/faker";
import { storeSeismicData } from "../helpers/helper.js";

export const generateLondonSeismicData = (): SeismicData => {
  // Generate random seismic data
  const generatedSeismicData: SeismicData = {
    city: "London",
    magnitude: faker.number.int({ min: 1, max: 2 }),
    latitude: faker.number.int({ min: 34, max: 64 }),
    longitude: faker.number.int({ min: 25, max: 50 }),
  };
   storeSeismicData(generatedSeismicData).catch(console.error);
  // Return seismic data
  return generatedSeismicData;
};

export const generateDublinSeismicData = (): SeismicData => {
  // Generate random seismic data
  const generatedSeismicData: SeismicData = {
    city: "Dublin",
    magnitude: faker.number.int({ min: 1, max: 2 }),
    latitude: faker.number.int({ min: 34, max: 64 }),
    longitude: faker.number.int({ min: 25, max: 50 }),
  };
   storeSeismicData(generatedSeismicData).catch(console.error);
  // Return seismic data
  return generatedSeismicData;
};
