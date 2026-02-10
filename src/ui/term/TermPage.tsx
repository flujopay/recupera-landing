"use client";

import { useCurrencyStore } from "@/lib/store/useCurrencyStore";
import { Footer } from "@/ui/layout/Footer";
import { Header } from "@/ui/layout/Header";
import { TermAndCond } from "./sections/TermAndCond";
import { TermAndCondPeru } from "./sections/TermAndCondPeru";

export const TermPage = () => {
  const { ipCurrency } = useCurrencyStore();

  return (
    <div className="min-h-screen flex flex-col">
      <Header variant="primary" />
      {ipCurrency === "PEN" ? <TermAndCondPeru /> : <TermAndCond />}
      <Footer />
    </div>
  );
};
