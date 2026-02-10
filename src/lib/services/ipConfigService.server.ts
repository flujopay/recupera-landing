import { api } from "@/api";

type IpInfoResponse = {
  country: string;
  error?: string;
};

export const getIpInfoServer = async (): Promise<IpInfoResponse | null> => {
  try {
    const res = await api.get("configuration/get_ip_info/");
    return res.data;
  } catch (error) {
    console.error("Error obteniendo IP en servidor:", error);
    return null;
  }
};
