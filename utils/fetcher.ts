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

  const response = await fetch(url, { ...options, headers });

  //   error handling
  if (!response.ok) {
    // Attempt to parse the error response
    let errorDetails;
    try {
      errorDetails = await response.json();
      console.log("--- - - - ");
      console.log("--- - - - ");
      console.log(errorDetails, "error details");
      console.log("--- - - - ");
      console.log("--- - - - ");
    } catch {
      errorDetails = { message: response.statusText };
    }

    const error = new Error("An error occurred while fetching the data");
    error.message = errorDetails;
    throw error;
  }

  return response.json();
}

export default fetcher;
