interface WeatherData {
  city:string;
  temperature: number;
  humidity: number;
  wind: number;
  rain: number;
}

interface SeismicData {
  city: string;
  magnitude: number;
  latitude: number;
  longitude: number;
}

interface SupercarData {
  model: string;
  engine: number;
  enginepower: number;
  doors: number;
  year: number;
  fuelconsumption: number;
}

interface BrandData {
  model: string;
  capacity: number;
  colour: string;
}

interface CountryData {
  country: string;
  cities: number;
  population: number;
  houses: number;
}