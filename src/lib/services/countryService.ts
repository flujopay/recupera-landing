import { useQuery } from "@tanstack/react-query";
import { TCountry } from "../types";

const API_BASE_URL = "https://dev.mv.flujolink.com/api/v1";

export const fetchCountries = async (): Promise<TCountry[]> => {
  const response = await fetch(`${API_BASE_URL}/countries/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Error ${response.status}: Failed to fetch countries`);
  }

  return response.json();
};

export const COUNTRIES_QUERY_KEY = ["countries"] as const;

export const useCountries = () => {
  return useQuery({
    queryKey: COUNTRIES_QUERY_KEY,
    queryFn: fetchCountries,
    staleTime: 1000 * 60 * 60, // 1 hora - los países no cambian frecuentemente
    gcTime: 1000 * 60 * 60 * 24, // 24 horas en cache
  });
};
