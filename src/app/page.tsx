import { RecuperaPage } from "@/ui/recupera/RecuperaPage";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="w-full">
      <Suspense>
        <RecuperaPage />
      </Suspense>
    </div>
  );
}
