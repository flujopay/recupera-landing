"use client";

import { useIpConfiguration } from "@/lib/hooks/useIpConfiguration";

export const IpConfigurationProvider = () => {
  useIpConfiguration();
  return null;
};
