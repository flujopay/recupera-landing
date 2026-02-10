import { create } from "zustand";

export type Country = "PEN" | "CLP" | "COP" | "MXN" | "USD";

interface CurrencyState {
  // Currency from IP configuration
  ipCurrency: Country; // CLP
  setIpCurrency: (currency: Country) => void;

  // Flag to control auto-opening of country select
  shouldAutoOpenCountrySelect: boolean;
  setShouldAutoOpenCountrySelect: (shouldOpen: boolean) => void;

  whatsappCountry: { phoneNumber: string; countryCode: string };
  setWhatsappCountry: ({
    phoneNumber,
    countryCode,
  }: {
    phoneNumber: string;
    countryCode: string;
  }) => void;
}

export const useCurrencyStore = create<CurrencyState>((set) => ({
  // Default values
  ipCurrency: "CLP",
  shouldAutoOpenCountrySelect: false,
  whatsappCountry: { phoneNumber: "944489673", countryCode: "+56" },

  // Actions
  setIpCurrency: (currency) => set({ ipCurrency: currency }),
  setShouldAutoOpenCountrySelect: (shouldOpen) =>
    set({ shouldAutoOpenCountrySelect: shouldOpen }),
  setWhatsappCountry: ({ phoneNumber, countryCode }) =>
    set({ whatsappCountry: { phoneNumber, countryCode } }),
}));
