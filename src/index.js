import { getProducts } from "../services/getProducts.js";
import { createProductCard } from "./components/ProductCard.js";

const renderProducts = (products) => {
  const productsList = document.querySelector("#offers");
  const html = products.map(createProductCard).join("");
  productsList.innerHTML = html;
};

const loadProducts = async () => {
  const products = await getProducts();
  renderProducts(products);
};

loadProducts();
