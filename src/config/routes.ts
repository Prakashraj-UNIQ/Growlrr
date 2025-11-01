export const routes = {
  home: "/",
  about: "/about-us",
  contact: "/contact-us",
  crowdfund: "/crowd-fund",
  philosophy: "/philosophy",
  blog:"blogs",
  products: "/products",
  cart: "/cart",
  dietplan: "/diet-plan",
  privacy: "/privacy-policy",
  terms: "/terms",

  // Dynamic routes as functions
  product: (id: string | number) => `/products/${id}`,
  category: (slug: string) => `/categories/${slug}`,
  order: (id: string | number) => `/orders/${id}`,
  user: (id: string | number) => `/users/${id}`,
};
