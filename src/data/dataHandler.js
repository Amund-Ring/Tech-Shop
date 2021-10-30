import productData from "../data/products.json";

//Returns the cart local storage or initializes a new one
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

//Adds the given item to the shopping cart
function addToCart(item) {
  let shoppingCart = getCartFromLocalStorage();
  shoppingCart = [...shoppingCart, item];
  localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
}

//Returns matching item from the product database
function getItem(id) {
  return productData.items.find(item => item.id === parseInt(id, 10));
}

//Returns the quantity available of a given color option in the database
function getQuantityAvailable(id, color) {
  const item = getItem(id);
  const colorOption = item.options.find(option => option.color === color);
  return colorOption.quantity;
}

//Checks if the item with the given id is available in the database
function itemIsAvailable(id) {
  return getItem(id).available;
}

/* Checks if a specific color option is available by comparing what's
available in the database and what is already in the shopping cart */
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

//Returns total number of order lines currently in the shopping cart
function getAmountInCart() {
  const shoppingCart = getCartFromLocalStorage();
  return shoppingCart.length;
}

//Returns the amount of a given color option currently in the shopping cart
function getOptionAmountInCart(id, color) {
  let shoppingCart = getCartFromLocalStorage();
  return shoppingCart.filter(item => item.productId === id && item.color === color)
    .length;
}

//Removes the given lineItem from the Shopping Cart
function removeFromCart(lineItemId) {

  // console.log(typeof lineItemId);

  const currentCart = getCartFromLocalStorage();
  const updatedCart = currentCart.filter(item => item.lineItemId !== lineItemId);
  localStorage.setItem("shoppingCart", JSON.stringify(updatedCart));
}

export {
  addToCart,
  colorIsAvailable,
  getAmountInCart,
  getCartFromLocalStorage,
  getItem,
  getOptionAmountInCart,
  getQuantityAvailable,
  itemIsAvailable,
  removeFromCart
};
