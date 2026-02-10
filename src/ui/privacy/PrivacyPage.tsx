import { Footer } from "@/ui/layout/Footer";
import { Header } from "@/ui/layout/Header";
import { PrivacyContent } from "./sections/PrivacyContent";

export const PrivacyPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header variant="primary" />
      <PrivacyContent />
      <Footer />
    </div>
  );
};
