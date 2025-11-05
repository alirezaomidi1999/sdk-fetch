import { getSdkConfig } from "../config";

export const fetchMutator = async <T>(
  url: string,
  options?: RequestInit
): Promise<T> => {
  const {
    baseURL,
    getToken,
    fetch: customFetch,
    defaultHeaders,
  } = getSdkConfig();
  const token = getToken ? await getToken() : undefined;

  const res = await (customFetch ?? fetch)(`${baseURL ?? ""}${url}`, {
    ...options,
    headers: {
      ...(options?.headers ?? {}),
      ...(defaultHeaders ?? {}),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });

  if (!res.ok) throw new Error(`Fetch error ${res.status}`);
  return res.json();
};
