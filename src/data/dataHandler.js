function getCartFromLocalStorage() {
  if (localStorage.getItem("shoppingCart") === null) {
    localStorage.setItem("shoppingCart", JSON.stringify([]));
    return [];
  }

  const cart = JSON.parse(localStorage.getItem("shoppingCart"));
  return cart;
};


function addToCart(item) {
  let shoppingCart = getCartFromLocalStorage();
  shoppingCart = [...shoppingCart, item];
  localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
}

function getAmountInCart() {
  const shoppingCart = getCartFromLocalStorage();
  return shoppingCart.length;
}

export {getCartFromLocalStorage, addToCart, getAmountInCart };



