import { TCountry } from "../types";

const API_BASE_URL = "https://dev.mv.flujolink.com/api/v1";

const DEFAULT_COUNTRIES: TCountry[] = [
  {
    id: 1,
    country: "+51",
    country_code: "Perú",
    icon: "https://flujopay.blob.core.windows.net/flujopay-django-files/flags/peru.png",
  },
  {
    id: 2,
    country: "+56",
    country_code: "Chile",
    icon: "https://flujopay.blob.core.windows.net/flujopay-django-files/flags/chile_1.png",
  },
];

export const getCountriesServer = async (): Promise<TCountry[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/countries/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 3600 }, // Cache por 1 hora
    });

    if (!response.ok) {
      console.error(`Error ${response.status}: Failed to fetch countries`);
      return DEFAULT_COUNTRIES;
    }

    const data = await response.json();
    return data.length > 0 ? data : DEFAULT_COUNTRIES;
  } catch (error) {
    console.error("Error obteniendo países en servidor:", error);
    return DEFAULT_COUNTRIES;
  }
};
