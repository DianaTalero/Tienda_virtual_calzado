import { getProducts } from "../../services/getProducts.js";
import { createProductCard } from "../../src/components/ProductCard.js";

const renderProducts = (products) => {
  const productsList = document.querySelector("#products");
  const html = products.map(createProductCard).join("");
  productsList.innerHTML = html;
};

const loadProducts = async () => {
  const products = await getProducts();
  renderProducts(products);
};

loadProducts();
