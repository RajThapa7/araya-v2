import { cookies } from "next/headers";

function mergeHeaders(...headerInits: HeadersInit[]) {
  let result: Record<string, string> = {};

  headerInits.forEach((init) => {
    new Headers(init).forEach((value, key) => {
      if (value === "null" || value === "undefined") {
        delete result[key];
      } else {
        // add the header
        result[key] = value;
      }
    });
  });

  return result;
}

async function fetcher<T>(
  apiEndPoint: string,
  options?: RequestInit
): Promise<T> {
  const cookie = cookies();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const url = baseUrl + apiEndPoint;

  if (!baseUrl) {
    throw new Error(
      "NEXT_PUBLIC_BASE_URL is not defined in the environment variables."
    );
  }

  const defaultHeaders = {
    Authorization: `Bearer ${cookie.get("accessToken")?.value || ""}`,
  };

  // merge them with the headers of the options
  const headers = mergeHeaders(defaultHeaders, options?.headers || {});

  try {
    const response = await fetch(url, { ...options, headers });
    if (!response.ok) {
      const error = new Error("An error occurred while fetching the data");
      error.message = response.statusText;
      throw error;
    }
    return response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    const err = new Error("An error occurred while fetching the data");
    throw err;
  }
}

export default fetcher;
