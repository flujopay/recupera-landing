"use client";
import { CONTACT_INFO, FOOTER_DESCUBRIR, FOOTER_EMPRESA, FOOTER_LEGAL, SOCIAL_LINKS } from "@/lib/data/constants";
import { AssetIcon } from "@/lib/utils/assets/icon";
import { AssetImage } from "@/lib/utils/assets/image";
import { usePathname, useRouter } from "next/navigation";


export const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavClick = (type: string, route: string) => {
    if (type === "external") {
      window.location.href = route;
    } else if (type === "scroll") {
      const sectionId = route.replace("#", "");
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 72;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    } else if (type === "redirect") {
      router.push(route);
    }
  };

  return (
    <footer className="bg-[#2270D0] text-white py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-start mb-10 md:mb-8 md:ml-[-50px] ml-[-32px]">
          <img
            src={AssetImage.logoBlanco.src}
            alt="Sena Logo"
            className="w-64 md:w-100"
          />
        </div>

        {/* Newsletter - Mobile */}
        <div className="md:hidden mb-6">
          <h3 className="font-bold text-xs mb-4 uppercase tracking-wide">
            SUSCRÍBETE A NUESTRO NEWSLETTER
          </h3>
          <form>
            <div className="relative border-b-2 border-gray-400 transition-colors duration-200">
              <input
                type="email"
                placeholder="Tu email"
                required
                className="w-full px-0 py-3 pr-28 text-sm bg-transparent border-none focus:outline-none placeholder:text-white"
              />
              <button
                type="submit"
                className="cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 text-sm font-bold text-[#f6793a] hover:text-orange-600 transition-colors duration-200 uppercase tracking-wide"
              >
                Suscríbete
              </button>
            </div>
          </form>
        </div>

        {/* Social Icons - Mobile (after newsletter) */}
        <div className="md:hidden flex gap-5 mb-8">
          <a
            href={SOCIAL_LINKS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#f6793a] transition-colors duration-200"
            aria-label="Facebook"
          >
            <AssetIcon.facebook width={22} height={22} />
          </a>
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors duration-200"
            aria-label="Instagram"
          >
            <AssetIcon.instagram width={22} height={22} />
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <AssetIcon.linkedin width={22} height={22} />
          </a>
          <a
            href={SOCIAL_LINKS.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors duration-200"
            aria-label="YouTube"
          >
            <AssetIcon.youtube width={22} height={22} />
          </a>
        </div>

        {/* Mobile: Single column sections */}
        <div className="md:hidden flex flex-col gap-8 mb-8">
          <div className="space-y-3">
            <h3 className="font-bold text-xs uppercase tracking-wide">
              CONTACTO
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-blue-300 transition-colors duration-200"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="hover:text-blue-300 transition-colors duration-200"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-xs uppercase tracking-wide">
              EMPRESA
            </h3>
            <ul className="space-y-2 text-sm">
              {FOOTER_EMPRESA.map((item) => (
                <li key={item.label}>
                  <button
                    disabled={item.disabled}
                    onClick={() =>
                      !item.disabled && handleNavClick(item.type, item.href)
                    }
                    className={`${item.disabled ? "" : "hover:text-blue-300 cursor-pointer"} transition-colors duration-200`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-xs uppercase tracking-wide">
              DESCUBRIR
            </h3>
            <ul className="space-y-2 text-sm">
              {FOOTER_DESCUBRIR.map((item) => (
                <li key={item.label}>
                  <button
                    disabled={item.disabled}
                    onClick={() =>
                      !item.disabled && handleNavClick(item.type, item.href)
                    }
                    className={`${item.disabled ? "" : "hover:text-blue-300 cursor-pointer"} transition-colors duration-200`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-xs uppercase tracking-wide">LEGAL</h3>
            <ul className="space-y-2 text-sm">
              {FOOTER_LEGAL.map((item) => (
                <li key={item.label}>
                  <button
                    disabled={item.disabled}
                    onClick={() =>
                      !item.disabled && handleNavClick(item.type, item.href)
                    }
                    className={`${item.disabled ? "" : "hover:text-blue-300 cursor-pointer"} transition-colors duration-200`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile: Bottom bar */}
        <div className="md:hidden">
          <div className="border-t border-white/30 pt-6 flex justify-between items-center">
            <p className="text-xs">© SENA SE 2026</p>
            <img className="w-20" src={AssetImage.byRecsa.src} alt="byRecsa" />
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-6 mb-8">
          <div className="space-y-3">
            <h3 className="font-bold text-sm mb-4 uppercase tracking-wide">
              EMPRESA
            </h3>
            <ul className="space-y-3 text-base">
              {FOOTER_EMPRESA.map((item) => (
                <li key={item.label}>
                  <button
                    disabled={item.disabled}
                    onClick={() =>
                      !item.disabled && handleNavClick(item.type, item.href)
                    }
                    className={`${item.disabled ? "" : "hover:text-blue-500 cursor-pointer"} transition-colors duration-200`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-sm mb-4 uppercase tracking-wide">
              DESCUBRIR
            </h3>
            <ul className="space-y-3 text-base">
              {FOOTER_DESCUBRIR.map((item) => (
                <li key={item.label}>
                  <button
                    disabled={item.disabled}
                    onClick={() =>
                      !item.disabled && handleNavClick(item.type, item.href)
                    }
                    className={`${item.disabled ? "" : "hover:text-blue-500 cursor-pointer"} transition-colors duration-200`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-sm mb-4 uppercase tracking-wide">
              CONTACTO
            </h3>
            <ul className="space-y-3 text-base">
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-blue-500 transition-colors duration-200 break-all"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="hover:text-blue-500 transition-colors duration-200"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-sm mb-4 uppercase tracking-wide">
              LEGAL
            </h3>
            <ul className="space-y-3 text-base">
              {FOOTER_LEGAL.map((item) => (
                <li key={item.label}>
                  <button
                    disabled={item.disabled}
                    onClick={() =>
                      !item.disabled && handleNavClick(item.type, item.href)
                    }
                    className={`${item.disabled ? "" : "hover:text-blue-500 cursor-pointer"} transition-colors duration-200`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter - Desktop */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="font-bold text-sm mb-6 uppercase tracking-wide">
              SUSCRÍBETE A NUESTRO NEWSLETTER
            </h3>
            <form>
              <div className="relative border-b-2 border-gray-400 transition-colors duration-200">
                <input
                  type="email"
                  placeholder="Tu email"
                  required
                  className="w-full px-0 py-3 pr-32 text-base bg-transparent border-none focus:outline-none placeholder:white"
                />
                <button
                  type="submit"
                  className="cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 text-base font-bold text-[#f6793a] hover:text-orange-600 transition-colors duration-200 uppercase tracking-wide"
                >
                  Suscríbete
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Desktop: Bottom bar */}
        <div className="hidden md:flex flex-row justify-between items-center pt-8 gap-4">
          <p className="text-sm">© SENA SE 2026</p>

          <div className="flex gap-6">
            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f6793a] transition-colors duration-200"
              aria-label="Facebook"
            >
              <AssetIcon.facebook width={22} height={22} />
            </a>
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors duration-200"
              aria-label="Instagram"
            >
              <AssetIcon.instagram width={22} height={22} />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <AssetIcon.linkedin width={22} height={22} />
            </a>
            <a
              href={SOCIAL_LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors duration-200"
              aria-label="YouTube"
            >
              <AssetIcon.youtube width={22} height={22} />
            </a>
          </div>
        </div>
        <div className="hidden md:flex w-full justify-end mt-8">
          <img className="w-24" src={AssetImage.byRecsa.src} alt="byRecsa" />
        </div>
      </div>
    </footer>
  );
};
