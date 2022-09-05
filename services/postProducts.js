import { BASE_URL } from "./settings.js";

/**
 * It takes a product as an argument, and then it sends a POST request to the API with the product as the
 * body of the request.
 *
 * @param product - the product to be sent to the API.
 * @returns  An array of objects with products.
 */
export const postProducts = async (product) => {
  try {
    const response = await fetch(`${BASE_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ product }),
    });

    if (!response.ok) {
      throw new Error("Error: function: postProducts");
    }

    const { data } = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
