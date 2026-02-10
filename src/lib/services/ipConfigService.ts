import { api } from "@/api";
import { useQuery } from "@tanstack/react-query";

type IpInfoResponse = {
  country: string;
  error?: string;
};

const getIpInfo = async (): Promise<IpInfoResponse> => {
  const res = await api.get("configuration/get_ip_info/");
  return res.data;
};

export const useGetIpInfo = () => {
  return useQuery({
    queryKey: ["ipInfo"],
    queryFn: getIpInfo,
    staleTime: Infinity,
    retry: 1,
  });
};
