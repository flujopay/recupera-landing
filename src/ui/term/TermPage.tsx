import { Footer } from "@/ui/layout/Footer";
import { Header } from "@/ui/layout/Header";
import { TermAndCond } from "./sections/TermAndCond";

export const TermPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header variant="primary" />
      <TermAndCond />
      <Footer />
    </div>
  );
};
