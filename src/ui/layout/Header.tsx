"use client";

import { useModalStore } from "@/lib/store/modalStore";
import { useCurrencyStore } from "@/lib/store/useCurrencyStore";
import { AssetIcon } from "@/lib/utils/assets/icon";
import { AssetImage } from "@/lib/utils/assets/image";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Button from "../shared/Button";

type Props = {
  variant: "primary" | "secondary";
};

const SENA_BASE_URL = "https://www.somossena.com";

export const Header = ({ variant }: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  const { showModal, hideModal } = useModalStore();
  const { ipCurrency } = useCurrencyStore();

  const logo =
    variant === "primary" ? AssetImage.logoBlack : AssetImage.logoBlack;

  const sectiosnNavbar = [
    {
      id: 1,
      name: "Productos",
      href: `${SENA_BASE_URL}/#productos`,
      type: "external" as const,
    },
    { id: 2, name: "Precios", href: "#precios", type: "scroll" as const },
    {
      id: 3,
      name: "Nosotros",
      href: `${SENA_BASE_URL}/nosotros`,
      type: "external" as const,
    },
    { id: 4, name: "Recupera", href: "/", type: "redirect" as const },

    {
      id: 5,
      name: "Blog",
      href: `${SENA_BASE_URL}/blog`,
      type: "external" as const,
    },
  ];

  const isActive = (section: (typeof sectiosnNavbar)[0]) => {
    // Recupera vive en "/"
    if (section.name === "Recupera") return pathname === "/";

    // Si alguna vez usas rutas internas reales
    if (section.type === "redirect") return pathname === section.href;

    return false;
  };

  const getActiveClass = (section: (typeof sectiosnNavbar)[0]) => {
    if (!isActive(section)) return "";
    return "inline-block border-b-2 border-brand-secondary !text-brand-primary pb-[2px]";
  };

  const handleNavClick = (section: (typeof sectiosnNavbar)[0]) => {
    hideModal();

    // 👇 si ya estás en esa sección/página, no hagas nada
    if (isActive(section)) return;

    if (section.type === "external") {
      window.location.href = section.href;
    } else if (section.type === "scroll") {
      const sectionId = section.href.replace("#", "");
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 72;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    } else if (section.type === "redirect") {
      router.push(section.href);
    }
  };

  const handleContactClick = () => {
    hideModal();
    const element = document.getElementById("contacto");
    if (element) {
      const offset = 72;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const openMobileMenu = () => {
    showModal({
      content: (
        <div className="flex flex-col h-full bg-white">
          {/* Header: Logo + Close */}
          <div className="flex items-center justify-between px-6 py-5">
            <Link href="/" onClick={() => hideModal()}>
              <Image src={logo} alt="Logo" className="w-36" />
            </Link>
            <button
              onClick={() => hideModal()}
              className="p-2"
              aria-label="Cerrar menú"
            >
              <AssetIcon.xMark width={24} height={24} className="text-black" />
            </button>
          </div>

          {/* Menu items */}
          <div className="flex flex-col">
            {sectiosnNavbar.map((section) => (
              <button
                key={section.id}
                onClick={() => handleNavClick(section)}
                className="w-full text-left px-6 py-5 border-t border-gray-200 cursor-pointer"
              >
                <span
                  className={`text-base font-bold text-black ${getActiveClass(section)}`}
                >
                  {section.name}
                </span>
              </button>
            ))}
            <div className="border-t border-gray-200" />
          </div>

          {/* CTA Button */}
          <div className="px-6 mt-12 pb-10">
            <Button
              size="md"
              text="Contáctanos"
              variant="primaryFilled"
              className="w-full max-w-[280px]"
              onClick={handleContactClick}
            />
          </div>
        </div>
      ),
      showHeader: false,
      width: "100%",
      height: "100vh",
      modalClassName: "lg:hidden",
      contentClassName: "!rounded-none !max-h-full",
    });
  };

  const redirectLogin = () => {
    const url = ipCurrency === "PEN" ? "pe" : "";
    router.push(`https://app.flujolink.com/login?l=${url}&origin=main`);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#f9f9f9]">
      <div
        className={`mx-auto max-w-[1280px] flex items-center gap-2 justify-between p-4 ${variant === "primary" ? "" : ""}`}
      >
        <div>
          <Link href={SENA_BASE_URL}>
            <Image src={logo} alt="Logo" className="w-36" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between gap-12">
          {sectiosnNavbar.map((section) => (
            <button
              key={section.id}
              onClick={() => handleNavClick(section)}
              className={`${
                variant === "primary"
                  ? "text-brand-primary-dark"
                  : "text-blue-500"
              } font-semibold cursor-pointer ${getActiveClass(section)}`}
            >
              {section.name}
            </button>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center gap-2">
          <Button
            size="md"
            text="Iniciar sesión"
            variant="ghost"
            onClick={redirectLogin}
            className="text-md"
          />
          <Button
            size="md"
            text="Contáctanos"
            variant={
              variant === "primary" ? "primaryFilled" : "secondaryFilled"
            }
            className="text-md"
            onClick={handleContactClick}
          />
        </div>

        {/* Mobile: Button + Menu */}
        <div className="lg:hidden flex items-center gap-2">
          <Button
            size="sm"
            text="Contáctanos"
            variant="secondaryFilled"
            className="text-xs px-3 py-1.5"
            onClick={handleContactClick}
          />
          <button
            onClick={openMobileMenu}
            className="p-2 z-50"
            aria-label="Abrir menú"
          >
            <AssetIcon.menu width={28} height={28} />
          </button>
        </div>
      </div>
    </header>
  );
};
