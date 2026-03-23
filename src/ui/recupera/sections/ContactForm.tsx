"use client";

import { usePostContactForm, usePostTestn8n } from "@/lib/services/contactService";
import { useCountries } from "@/lib/services/countryService";
import { useCurrencyStore } from "@/lib/store/useCurrencyStore";
import { useToastStore } from "@/lib/store/useToastStore";
import { ContactFormRequest } from "@/lib/types/contact";
import Button from "@/ui/shared/Button";
import { Input } from "@/ui/shared/Input";
import SimpleCountrySelect, {
  OptionSelect,
} from "@/ui/shared/SimpleCountrySelect";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";

type FormData = {
  nombre: string;
  apellido: string;
  empresa: string;
  email: string;
  whatsapp: string;
  facturas_pendientes: string;
  alguien_cobrando: string;
};

export const ContactForm = () => {
  const { postTestn8nMutate, isLoadingPostTestn8n } = usePostTestn8n();
  const { postContactFormMutate } = usePostContactForm();
  const { data: countries = [] } = useCountries();
  const { ipCurrency } = useCurrencyStore();
  const { showToast } = useToastStore();
  const searchParams = useSearchParams();
  const [countrySelect, setCountrySelect] = useState<string | null>(null);

  const utmSource = searchParams?.get("utm_source") || null;
  const utmMedium = searchParams?.get("utm_medium") || null;
  const utmCampaign = searchParams?.get("utm_campaign") || null;
  const utmContent = searchParams?.get("utm_content") || null;

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
    priorityItems.sort(
      (a, b) =>
        priorityCountries.indexOf(a.id) - priorityCountries.indexOf(b.id),
    );
    return [...priorityItems, ...otherItems];
  }, [countries]);

  useEffect(() => {
    const currencyMap: Record<string, string> = {
      PEN: "+51",
      CLP: "+56",
      COP: "+57",
      MXN: "+52",
      USD: "+593",
    };
    if (ipCurrency && currencyMap[ipCurrency]) {
      setCountrySelect(currencyMap[ipCurrency]);
    }
  }, [ipCurrency]);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      nombre: "",
      apellido: "",
      empresa: "",
      email: "",
      whatsapp: "",
      facturas_pendientes: "",
      alguien_cobrando: "",
    },
  });

  const onSubmit = (data: FormData) => {
    const pais =
      countries?.find((c) => c.country === countrySelect)?.country_code || "";
    const telefonoConPrefijo = (countrySelect || "") + data.whatsapp;

    // Payload para n8n webhook
    const payload = {
      ...data,
      codigo_pais: countrySelect || "",
      pais,
    };

    // Payload para API de contacto
    const contactPayload: ContactFormRequest = {
      nombre: data.nombre,
      apellido: data.apellido,
      correo: data.email,
      telefono: telefonoConPrefijo,
      formOrigin: "Formulario de Registro",
      countryName: pais,
      productType: "main",
      nombreEmpresa: data.empresa,
      mensaje: "",
      howFound: "",
      utmSource: utmSource || undefined,
      utmMedium: utmMedium || undefined,
      utmCampaign: utmCampaign || undefined,
      utmContent: utmContent || undefined,
    };

    // Llamar ambas APIs
    postContactFormMutate(contactPayload);
    postTestn8nMutate(payload, {
      onSuccess: () => {
        showToast({
          iconType: "success",
          message: "Formulario enviado correctamente",
          subMessage: "Gracias, pronto nos pondremos en contacto contigo.",
        });
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
            {/* Campo 1 — Nombre y Apellido */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <Controller
                name="nombre"
                control={control}
                rules={{ required: "El nombre es obligatorio" }}
                render={({ field }) => (
                  <Input
                    label="Nombre"
                    placeholder="Tu nombre"
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
                    placeholder="Tu apellido"
                    {...field}
                    error={errors.apellido?.message}
                  />
                )}
              />
            </div>

            {/* Campo 2 — Empresa */}
            <div className="mb-4">
              <Controller
                name="empresa"
                control={control}
                rules={{
                  required: "El nombre de la empresa es obligatorio",
                }}
                render={({ field }) => (
                  <Input
                    label="Empresa"
                    placeholder="Nombre de tu empresa"
                    {...field}
                    error={errors.empresa?.message}
                  />
                )}
              />
            </div>

            {/* Campo 3 — Email */}
            <div className="mb-4">
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "El email es obligatorio",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Email inválido",
                  },
                }}
                render={({ field }) => (
                  <Input
                    label="Email"
                    type="email"
                    placeholder="tu@email.com"
                    {...field}
                    error={errors.email?.message}
                  />
                )}
              />
            </div>

            {/* Campo 4 — WhatsApp */}
            <div className="mb-4">
              <Controller
                name="whatsapp"
                control={control}
                rules={{
                  required: "El número de WhatsApp es obligatorio",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Solo se permiten números",
                  },
                }}
                render={({ field }) => (
                  <Input
                    label="WhatsApp"
                    type="tel"
                    placeholder="Número"
                    value={field.value || ""}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      const onlyNumbers = e.target.value.replace(/\D/g, "");
                      field.onChange(onlyNumbers);
                    }}
                    error={errors.whatsapp?.message}
                    leftElement={
                      <SimpleCountrySelect
                        value={countrySelect}
                        onChange={(value: string) => setCountrySelect(value)}
                        options={countryOptions}
                      />
                    }
                  />
                )}
              />
            </div>

            {/* Campo 5 — ¿Cuántas facturas tienes pendientes? */}
            <div className="mb-6">
              <label className="block text-sm font-bold text-black mb-3">
                ¿Cuántas facturas tienes pendientes?
                <span className="text-red-500">*</span>
              </label>
              <Controller
                name="facturas_pendientes"
                control={control}
                rules={{ required: "Debes seleccionar una opción" }}
                render={({ field }) => (
                  <div className="flex items-center gap-6">
                    {[
                      { value: "1-10", label: "1-10" },
                      { value: "10-50", label: "10-50" },
                      { value: "50+", label: "50+" },
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
                        <span className="text-sm text-black font-medium">
                          {opcion.label}
                        </span>
                      </label>
                    ))}
                  </div>
                )}
              />
              {errors.facturas_pendientes && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.facturas_pendientes.message}
                </p>
              )}
            </div>

            {/* Campo 6 — ¿Alguien en tu equipo se encarga de cobrar? */}
            <div className="mb-6">
              <label className="block text-sm font-bold text-black mb-3">
                ¿Alguien en tu equipo se encarga de cobrar?
                <span className="text-red-500">*</span>
              </label>
              <Controller
                name="alguien_cobrando"
                control={control}
                rules={{ required: "Debes seleccionar una opción" }}
                render={({ field }) => (
                  <div className="flex items-center gap-6">
                    {[
                      { value: "Sí", label: "Sí" },
                      { value: "No", label: "No" },
                      { value: "A veces", label: "A veces" },
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
                        <span className="text-sm text-black font-medium">
                          {opcion.label}
                        </span>
                      </label>
                    ))}
                  </div>
                )}
              />
              {errors.alguien_cobrando && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.alguien_cobrando.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              text={isLoadingPostTestn8n ? "Enviando..." : "Enviar"}
              variant="primaryFilled"
              size="md"
              className="w-[200px]"
              disabled={isLoadingPostTestn8n}
            />
          </form>
        </div>
      </div>
    </div>
  );
};
