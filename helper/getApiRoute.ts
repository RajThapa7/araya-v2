const routes = {
  login: () => "/login",
  logout: () => "/logout",
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
  getProductsBySearchTerm: () => `/product/search`,

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
  deleteProduct: () => `/admin/product/delete`,
  editProduct: (productId?: string) => `/admin/product/edit/${productId}`,

  addCategory: () => "/admin/category/add",
  editCategory: () => "/admin/category/edit",
  deleteCategory: (categoryId?: string) => `/admin/category/${categoryId}`,

  getAllCarouselItem: () => "/carousel",
  getCarouselById: (id?: string) => `/carousel/${id}`,
  addCarouselItem: () => "/admin/carousel/add",
  removeCarouselItem: (id?: string) => `/admin/carousel/delete/${id}`,
  editCarouselItem: (id?: string) => `/admin/carousel/edit/${id}`,

  getAllReviewsOnProduct: (productId?: string, userId?: string) =>
    `/review/${productId}/${userId}`,
  addReviewOnProduct: () => "/review/add",
  editReviewOnProduct: (productId?: string, userId?: string) =>
    `/review/edit/${productId}/${userId}`,
  deleteReviewOnProduct: (productId?: string, userId?: string) =>
    `/review/delete/${productId}/${userId}`,

  initiateKhalitPayment: () => "/checkout/khalti",
  verifyKhalitPayment: (id?: string) => `/checkout/khalti/verify/${id}`,
};

const getApiRoute = (
  service: keyof typeof routes,
): ((id?: string, id2?: string) => string) => {
  return routes[service];
};

export default getApiRoute;
