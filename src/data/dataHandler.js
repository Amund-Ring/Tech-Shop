import productData from "../data/products.json";

function getCartFromLocalStorage() {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("shoppingCart") === null) {
      localStorage.setItem("shoppingCart", JSON.stringify([]));
      return [];
    }

    const cart = JSON.parse(localStorage.getItem("shoppingCart"));
    return cart;
  }

  return [];
}

function addToCart(item) {
  let shoppingCart = getCartFromLocalStorage();
  shoppingCart = [...shoppingCart, item];
  localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
}

function getAmountInCart() {
  const shoppingCart = getCartFromLocalStorage();
  return shoppingCart.length;
}

function getOptionAmountInCart(id, color) {
  let shoppingCart = getCartFromLocalStorage();
  return shoppingCart.filter(item => item.id === id && item.color === color)
    .length;
}

function getItem(id) {
  return productData.items.find(item => item.id === parseInt(id, 10));
}

function itemIsAvailable(id) {
  return getItem(id).available;
}

function colorIsAvailable(id, color) {
  if (itemIsAvailable(id)) {
    const colorOption = getItem(id).options.find(
      //eslint-disable-next-line
      option => option.color == color
    );

    const inCart = getOptionAmountInCart(id, color);

    if (typeof colorOption !== "undefined") {
      return colorOption.quantity - inCart > 0;
    }
  }
  return false;
}

function getQuantityAvailable(id, color) {
  const item = getItem(id);
  const colorOption = item.options.find(option => option.color === color);
  return colorOption.quantity;
}

export {
  getCartFromLocalStorage,
  addToCart,
  getAmountInCart,
  getItem,
  getQuantityAvailable,
  itemIsAvailable,
  colorIsAvailable,
  getOptionAmountInCart,
};
