import { postProducts } from "../../services/postProducts.js";
import { toast } from "https://cdn.skypack.dev/wc-toast";

/**
 * It takes a CSS selector as an argument and returns the first element that matches that selector
 */
const $ = (selector) => document.querySelector(selector);

const form = $(".form");
const imageInput = form.elements["image"];
const imagePreview = $(".product__image");

const mapElementSelector = {
  name: "product__title",
  description: "product__text",
  price: "product__price",
};

/**
 * It takes an element and text as arguments and sets the element's text content to the text
 */
const previewText = ({ element, text }) => {
  element.textContent = text;
};

/**
 * It takes the form controls and returns an object with the form data and an unique ID
 * @returns An object with an unique ID and the name and value of each input.
 */
const getFormData = () => {
  const elements = document.querySelectorAll(".form__input");

  const formData = {};

  elements.forEach(({ name, value }) => {
    formData[name] = value;
  });

  return formData;
};

/**
 * If the element is an input or textarea, and the value is not empty, then preview the text.
 * @param e - the event object
 * @returns The function handleBlur is being returned.
 */
const handleBlur = (e) => {
  const { name, value, tagName } = e.target;

  if (tagName !== "INPUT" && tagName !== "TEXTAREA") return;

  if (name === "image") {
    handleImageChange(e);
    return;
  }

  if (!value) return;

  const element = $(`.${mapElementSelector[name]}`);
  const text = name === "price" ? `$${value} USD` : value;

  previewText({ element, text });
};

/**
 * It previews the image URL entered by the user
 * @param e - The event object
 */
const handleImageChange = (e) => {
  imagePreview.setAttribute("src", e.target.value);

  // --- For file input
  // const [file] = e.target.files;

  // if (!file) return;

  // imagePreview.setAttribute("src", URL.createObjectURL(file));

  // imagePreview.onload = () => {
  //   URL.revokeObjectURL(imagePreview.src);
  // };
};

/**
 * It posts the product object to the server
 * @param e - The event object
 */
const handleSubmit = async (e) => {
  e.preventDefault();

  const btnSubmit = $(".btn-create");
  btnSubmit.disabled = true;

  const formData = getFormData();

  try {
    await postProducts(formData);

    btnSubmit.disabled = false;

    toast("Product create successfully!", {
      icon: {
        type: "success",
      },
    });
    form.reset();
  } catch (_) {
    btnSubmit.disabled = false;
    toast("Something went wrong!", {
      icon: {
        type: "error",
      },
    });
  }
};

form.addEventListener("submit", handleSubmit);
form.addEventListener("focusout", handleBlur);
imageInput.addEventListener("change", handleImageChange);
