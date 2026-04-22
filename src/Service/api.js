const BASE_URL = "https://dummyjson.com/products";

// get all products
export const getProducts = async () => {
  const res = await fetch(BASE_URL);
  const data = await res.json();
  return data.products;
};

// get single product
export const getSingleProduct = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  return res.json();
};

// get categories
export const getCategories = async () => {
  const res = await fetch(`${BASE_URL}/categories`);
  return res.json();
};