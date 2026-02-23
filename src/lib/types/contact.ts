export type ContactFormRequest = {
  formOrigin: string;
  countryName: string;
  productType: string;
  nombre: string;
  apellido: string;
  correo: string;
  telefono: string;
  howFound: string;
  representaEmpresa?: string;
  nombreEmpresa?: string;
  mensaje: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  file?: File;
};
