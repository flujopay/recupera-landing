"use client";

import { TCountry } from "@/lib/types";
import { QueryClient, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

type Props = {
  countries: TCountry[];
};

export const CountriesInitializer = ({ countries }: Props) => {
  const queryClient = useQueryClient();

  useEffect(() => {
    // Inicializar el cache de React Query con los datos del servidor
    queryClient.setQueryData(["countries"], countries);
  }, [countries, queryClient]);

  return null;
};
