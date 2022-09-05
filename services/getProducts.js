import { BASE_URL } from "./settings.js";

/**
 * It gets data from the API and returns it.
 * @returns - Array of objects with products.
 */
export const getProducts = async () => {
  const response = await fetch(`${BASE_URL}/products`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const { data } = await response.json();
  return data;
};
