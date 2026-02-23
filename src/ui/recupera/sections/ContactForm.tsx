"use client";

import { usePostContactForm } from "@/lib/services/contactService";
import { useCountries } from "@/lib/services/countryService";
import { useCurrencyStore } from "@/lib/store/useCurrencyStore";
import { useToastStore } from "@/lib/store/useToastStore";
import Button from "@/ui/shared/Button";
import { Input } from "@/ui/shared/Input";
import SimpleCountrySelect, {
  OptionSelect,
} from "@/ui/shared/SimpleCountrySelect";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";

type FormData = {
  nombre: string;
  apellido: string;
  correo: string;
  countryCode: string;
  telefono: string;
  representaEmpresa: string;
  nombreEmpresa?: string;
  mensaje?: string;
  comoLlegaste: string;
  file?: FileList;
};

export const ContactForm = () => {
  const { data: countries = [] } = useCountries();
  const { postContactFormMutate, isLoadingPostContactForm } =
    usePostContactForm();
  const searchParams = useSearchParams();
  const [countrySelect, setCountrySelect] = useState<string | null>(null);
  const { ipCurrency, setIpCurrency, setWhatsappCountry } = useCurrencyStore();
  const { showToast } = useToastStore();
  const router = useRouter();

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      nombre: "",
      apellido: "",
      correo: "",
      countryCode: "+51",
      telefono: "",
      representaEmpresa: "si",
      nombreEmpresa: "",
      mensaje: "",
      comoLlegaste: "",
      file: undefined,
    },
  });

  const representaEmpresa = watch("representaEmpresa");

  const countryOptions = useMemo(() => {
    if (!countries.length) return [];

    const priorityCountries = ["+51", "+56", "+57", "+593", "+52"];
    const priorityItems: OptionSelect[] = [];
    const otherItems: OptionSelect[] = [];

    countries.forEach((item) => {
      const option: OptionSelect = {
        id: item.country,
        label: item.country,
        icon: item.icon,
        subValue: item.country,
      };

      if (priorityCountries.includes(item.country)) {
        priorityItems.push(option);
      } else {
        otherItems.push(option);
      }
    });

    priorityItems.sort((a, b) => {
      return priorityCountries.indexOf(a.id) - priorityCountries.indexOf(b.id);
    });

    return [...priorityItems, ...otherItems];
  }, [countries]);

  useEffect(() => {
    if (ipCurrency === "PEN") {
      setCountrySelect("+51");
    } else if (ipCurrency === "CLP") {
      setCountrySelect("+56");
    } else if (ipCurrency === "COP") {
      setCountrySelect("+57");
    } else if (ipCurrency === "MXN") {
      setCountrySelect("+52");
    } else if (ipCurrency === "USD") {
      setCountrySelect("+593");
    }
  }, [ipCurrency]);

  const utmSource = searchParams?.get("utm_source") || null;
  const utmMedium = searchParams?.get("utm_medium") || null;
  const utmCampaign = searchParams?.get("utm_campaign") || null;
  const utmContent = searchParams?.get("utm_content") || null;

  const onChangeCountry = (value: string) => {
    setCountrySelect(value);
    if (value === "+51") {
      setIpCurrency("PEN");
      setWhatsappCountry({
        phoneNumber: "958969041",
        countryCode: "+51",
      });
    } else if (value === "+56") {
      setIpCurrency("CLP");
      setWhatsappCountry({
        phoneNumber: "944489673",
        countryCode: "+56",
      });
    } else if (value === "+57") {
      setIpCurrency("COP");
      setWhatsappCountry({
        phoneNumber: "944489673",
        countryCode: "+56",
      });
    } else if (value === "+52") {
      setIpCurrency("MXN");
      setWhatsappCountry({
        phoneNumber: "944489673",
        countryCode: "+56",
      });
    } else if (value === "+593") {
      setIpCurrency("USD");
      setWhatsappCountry({
        phoneNumber: "944489673",
        countryCode: "+56",
      });
    }
  };

  const onSubmit = (data: FormData) => {
    const telefonoConPrefijo = (countrySelect || "") + data.telefono;

    const form = new FormData();

    form.append("telefono", telefonoConPrefijo);
    form.append("formOrigin", "Formulario de Registro");
    form.append(
      "countryName",
      countries?.find((type) => type.country === countrySelect)?.country_code ||
        "",
    );
    form.append("productType", "main");
    form.append("nombre", data.nombre);
    form.append("apellido", data.apellido);
    form.append("correo", data.correo);
    form.append("representaEmpresa", data.representaEmpresa);
    form.append("nombreEmpresa", data.nombreEmpresa || "");
    form.append("mensaje", data.mensaje || "");
    form.append("howFound", data.comoLlegaste);

    if (utmSource) form.append("utmSource", utmSource);
    if (utmMedium) form.append("utmMedium", utmMedium);
    if (utmCampaign) form.append("utmCampaign", utmCampaign);
    if (utmContent) form.append("utmContent", utmContent);

    const file = data.file?.[0];
    if (file) form.append("file", file);
    // for (const [key, value] of form.entries()) {
    //   console.log(key, value);
    // }

    postContactFormMutate(form, {
      onSuccess: () => {
        showToast({
          iconType: "success",
          message: "Formulario enviado correctamente",
          subMessage:
            "Gracias por tu mensaje, pronto nos pondremos en contacto contigo.",
        });
        router.push("/thankyou");
        reset();
      },
      onError: () => {
        showToast({
          iconType: "error",
          message: "Error al enviar el formulario",
          subMessage: "Por favor, intenta de nuevo.",
        });
      },
    });
  };

  return (
    <div id="contacto" className="max-w-[1280px] mx-auto py-12">
      <div className="flex justify-between flex-col md:flex-row gap-2 px-4 items-start mt-6">
        <div className="flex flex-1">
          <div className="max-w-full text-left">
            <h2 className="text-brand-primary-dark text-3xl md:text-6xl font-extrabold leading-tight">
              Estás a un paso de cobrar{" "}
              <span className="text-brand-primary font-caslon">mejor</span>
              <span className="text-brand-secondary font-caslon">.</span>
            </h2>
          </div>
        </div>
        <div className="flex flex-1 w-full">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full rounded-2xl bg-[#f4f4f4] px-6 py-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <Controller
                name="nombre"
                control={control}
                rules={{ required: "El nombre es obligatorio" }}
                render={({ field }) => (
                  <Input
                    label="Nombre completo"
                    {...field}
                    error={errors.nombre?.message}
                  />
                )}
              />
              <Controller
                name="apellido"
                control={control}
                rules={{ required: "El apellido es obligatorio" }}
                render={({ field }) => (
                  <Input
                    label="Apellido"
                    {...field}
                    error={errors.apellido?.message}
                  />
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <Controller
                name="correo"
                control={control}
                rules={{
                  required: "El correo es obligatorio",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Correo inválido",
                  },
                }}
                render={({ field }) => (
                  <Input
                    label="Email"
                    type="email"
                    {...field}
                    error={errors.correo?.message}
                  />
                )}
              />
              <Controller
                name="telefono"
                control={control}
                rules={{
                  required: "El teléfono es obligatorio",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Solo se permiten números",
                  },
                }}
                render={({ field }) => (
                  <Input
                    label="Celular"
                    type="tel"
                    placeholder="Número"
                    {...field}
                    error={errors.telefono?.message}
                    leftElement={
                      <SimpleCountrySelect
                        value={countrySelect}
                        onChange={(value: string) => onChangeCountry(value)}
                        options={countryOptions}
                      />
                    }
                  />
                )}
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-bold text-black mb-3">
                ¿Representas a una empresa?
              </label>
              <Controller
                name="representaEmpresa"
                control={control}
                render={({ field }) => (
                  <div className="flex items-center gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        value="si"
                        checked={field.value === "si"}
                        onChange={() => field.onChange("si")}
                        className="w-4 h-4 text-brand-primary accent-brand-primary"
                      />
                      <span className="text-sm text-black font-medium">SÍ</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        value="no"
                        checked={field.value === "no"}
                        onChange={() => field.onChange("no")}
                        className="w-4 h-4 text-brand-primary accent-brand-primary"
                      />
                      <span className="text-sm text-black font-medium">NO</span>
                    </label>
                  </div>
                )}
              />
            </div>

            {representaEmpresa === "si" && (
              <div className="mb-4">
                <Controller
                  name="nombreEmpresa"
                  control={control}
                  rules={{
                    required:
                      representaEmpresa === "si"
                        ? "El nombre de la empresa es obligatorio"
                        : false,
                  }}
                  render={({ field }) => (
                    <Input
                      label="Nombre de tu empresa"
                      placeholder="Empresa..."
                      {...field}
                      error={errors.nombreEmpresa?.message}
                    />
                  )}
                />
              </div>
            )}

            {representaEmpresa === "no" && (
              <div className="mb-4">
                <Controller
                  name="mensaje"
                  control={control}
                  rules={{
                    required:
                      representaEmpresa === "no"
                        ? "El motivo es obligatorio"
                        : false,
                  }}
                  render={({ field }) => (
                    <Input
                      label="¿Por qué nos contactas?"
                      placeholder="¿Motivo?"
                      {...field}
                      error={errors.mensaje?.message}
                    />
                  )}
                />
              </div>
            )}

            <div className="mb-6">
              <label className="block text-sm font-bold text-black mb-2">
                Adjuntar archivo{" "}
                <span className="text-gray-500 font-normal">(opcional)</span>
              </label>

              <Controller
                name="file"
                control={control}
                rules={{
                  validate: (files) => {
                    if (!files || files.length === 0) return true;

                    const file = files[0];
                    const maxMB = 10;
                    const maxBytes = maxMB * 1024 * 1024;

                    const allowed = [
                      "application/pdf",
                      "image/png",
                      "image/jpeg",
                      "image/webp",
                    ];

                    if (file.size > maxBytes) return `Máximo ${maxMB}MB`;
                    if (!allowed.includes(file.type))
                      return "Solo PDF o imágenes (PNG/JPG/WEBP)";

                    return true;
                  },
                }}
                render={({ field }) => (
                  <div className="rounded-2xl border border-gray-200 bg-white p-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 h-10 w-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                        {/* icono simple */}
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                          />
                          <path
                            d="M7 10l5-5 5 5"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 5v12"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>

                      <div className="flex-1">
                        <p className="text-sm font-semibold text-black">
                          Sube un archivo (brief, captura, PDF)
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          PDF o imagen. Máx 10MB.
                        </p>

                        <div className="mt-3 flex items-center gap-3">
                          <label className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold cursor-pointer bg-gray-100 hover:bg-gray-200 transition">
                            Elegir archivo
                            <input
                              type="file"
                              className="hidden"
                              accept=".pdf,image/*"
                              onChange={(e) => {
                                console.log(e.target.files);
                                field.onChange(e.target.files);
                              }}
                            />
                          </label>

                          {field.value?.length ? (
                            <div className="min-w-0">
                              <p className="text-sm text-black truncate">
                                {field.value[0].name}
                              </p>
                              <button
                                type="button"
                                className="text-xs text-brand-primary font-semibold hover:underline"
                                onClick={() => field.onChange(undefined)}
                              >
                                Quitar
                              </button>
                            </div>
                          ) : (
                            <span className="text-xs text-gray-400">
                              Ningún archivo seleccionado
                            </span>
                          )}
                        </div>

                        {errors.file?.message && (
                          <p className="text-red-500 text-xs mt-2">
                            {errors.file.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-bold text-black mb-2">
                ¿Cómo llegaste a Sena?<span className="text-red-500">*</span>
              </label>
              <Controller
                name="comoLlegaste"
                control={control}
                rules={{ required: "Debes seleccionar una opción" }}
                render={({ field }) => (
                  <div className="space-y-2">
                    {[
                      { value: "google", label: "Google" },
                      { value: "social", label: "Redes sociales" },
                      { value: "ads", label: "Publicidad" },
                      { value: "referral", label: "Referido" },
                      { value: "other", label: "Otro" },
                    ].map((opcion) => (
                      <label
                        key={opcion.value}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="radio"
                          value={opcion.value}
                          checked={field.value === opcion.value}
                          onChange={() => field.onChange(opcion.value)}
                          className="w-4 h-4 text-brand-primary accent-brand-primary"
                        />
                        <span className="text-sm text-black">
                          {opcion.label}
                        </span>
                      </label>
                    ))}
                  </div>
                )}
              />
              {errors.comoLlegaste && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.comoLlegaste.message}
                </p>
              )}
            </div>

            <p className="text-xs mb-4">
              Al hacer click en enviar, aceptas los{" "}
              <Link
                href="/term"
                className="text-brand-primary cursor-pointer font-semibold"
              >
                Términos y Condiciones{" "}
              </Link>
              y la{" "}
              <Link
                href="/privacy"
                className="text-brand-primary font-semibold"
              >
                Política de Privacidad
              </Link>
            </p>

            <Button
              type="submit"
              text={isLoadingPostContactForm ? "Enviando..." : "Enviar"}
              variant="primaryFilled"
              size="md"
              className="w-[200px]"
              disabled={isLoadingPostContactForm}
            />
          </form>
        </div>
      </div>
    </div>
  );
};
