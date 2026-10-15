
const BASE_URL = "https://dummyjson.com/products";

// Get all products
export const getProducts = async () => {
  const res = await fetch(`${BASE_URL}?limit=0`);

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();
  return data.products;
};

// Get a single product by ID
export const getSingleProduct = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return res.json();
};

// Get all categories
export const getCategories = async () => {
  const res = await fetch(`${BASE_URL}/categories`);

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  return res.json();
};
