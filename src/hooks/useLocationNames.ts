import { citiesOfCanada, citiesOfUsa, countriesData } from "@/constants/countries";

const useLocationNames = (country: string, state: string, city: string) => {
  const countryName = countriesData.find((x) => x.country_code === country)?.label || "Not Provided";
  const stateName =
    countriesData.find((x) => x.country_code === country)?.states.find((x) => x.state_code === state)?.label ||
    "Not Provided";
  const cityName =
    country === "US"
      ? citiesOfUsa.find((x) => x.city_code === city)?.label
      : citiesOfCanada.find((x) => x.city_code === city)?.label || "Not Provided";

  return { countryName, stateName, cityName };
};

export default useLocationNames;
