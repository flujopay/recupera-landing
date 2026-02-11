import { api } from "@/api";

import { headers } from "next/headers";

const getClientIp = async () => {
  const h = await headers();

  const xff = h.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();

  return h.get("x-real-ip") ?? h.get("cf-connecting-ip") ?? null;
};

export const getIpInfoServer = async (): Promise<any | null> => {
  try {
    const clientIp = await getClientIp();

    const res = await api.get("configuration/get_ip_info/", {
      headers: clientIp ? { "x-client-ip": clientIp } : undefined,
    });

    return res.data;
  } catch (error) {
    console.error("Error obteniendo IP en servidor:", error);
    return null;
  }
};
