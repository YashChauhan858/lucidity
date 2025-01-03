import Endpoints from "network/endpoints";
import { TGetInventory } from "src/types";

export const getInventory = async (): Promise<
  [TGetInventory[] | null, { message: string } | null | Error]
> => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  if (!BASE_URL) return [null, { message: "Base Url is not provided" }];
  try {
    const res = await fetch(BASE_URL + Endpoints.inventory, {
      method: "GET",
    });

    if (!res?.ok)
      return [null, { message: res?.statusText ?? "Something went wrong" }];

    const data = await res.json();

    return [data, null];
  } catch (error) {
    return [null, error as Error];
  }
};
