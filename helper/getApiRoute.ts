const routes = {
  login: () => "/login",
  register: () => "/register",
  googleLogin: () => "/login/google",
  facebookLogin: () => "/login/facebook",
  authSuccess: () => "/auth/success",

  getAllProducts: () => "/product",
  searchProduct: (search?: string) => `/product/search?search=${search}`,
  getProductById: (productId?: string) => `/product/${productId}`,
  getAllCategories: () => "/category",
  getProductsUnderCategory: (categorySlug?: string) =>
    `/category/${categorySlug}`,

  getUserCartItems: (userId?: string) => `/cart/${userId}`,
  addProductToCart: () => "/cart/add",
  removeProductFromCart: () => "/cart/remove",

  getUserWishlistItems: (userId?: string) => `/wishlist/${userId}`,
  addProductToWishlist: () => "/wishlist/add",
  removeProductFromWishlist: () => "/wishlist/remove",

  adminLogin: () => "/admin/login",
  adminRegister: () => "/admin/register",

  getAllUsers: () => "/admin/users",
  addProduct: () => "/admin/product/add",
  deleteProduct: (productId?: string) => `/admin/product/delete/${productId}`,
  editProduct: () => "/admin/product/edit",

  addCategory: () => "/admin/category/add",
  editCategory: () => "/admin/category/edit",
  deleteCategory: (categoryId?: string) => `/admin/category/${categoryId}`,
};

const getApiRoute = (
  service: keyof typeof routes
): ((id?: string) => string) => {
  return routes[service];
};

export default getApiRoute;
