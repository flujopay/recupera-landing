"use client";

import { TCountry } from "@/lib/types";
import { CountriesInitializer } from "@/ui/shared/CountriesInitializer";
import { IpConfigInitializer } from "@/ui/shared/IpConfigInitializer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

type ProvidersProps = {
  children: React.ReactNode;
  country?: string | null;
  countries?: TCountry[];
};

export default function Providers({
  children,
  country,
  countries = [],
}: ProvidersProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <IpConfigInitializer country={country || null} />
      <CountriesInitializer countries={countries} />
      {children}
    </QueryClientProvider>
  );
}
