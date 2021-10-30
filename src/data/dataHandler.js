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
  return shoppingCart.filter(
    item => item.productId === id && item.color === color
  ).length;
}

/* Returns a shopping cart array where the items are sorted by options
so that we can render identical options on one line on the checkout page */
function getSortedCart() {
  let currentCart = getCartFromLocalStorage();
  const sortedCart = [];

  while (currentCart.length > 0) {
    sortedCart.push(
      currentCart.filter(
        cartItem =>
          cartItem.productId === currentCart[0].productId &&
          cartItem.color === currentCart[0].color
      )
    );

    currentCart = currentCart.filter(
      cartItem =>
        cartItem.productId !== currentCart[0].productId ||
        cartItem.color !== currentCart[0].color
    );
  }

  return sortedCart;
}

//Returns the sum total for the products in the shopping cart
function getTotalSum() {
  const currentCart = getCartFromLocalStorage();
  let sum = 0;

  currentCart.forEach(lineItem => {
    sum = sum + parseInt(lineItem.price, 10);
  });

  return sum;
}

//Removes the given lineItem from the shopping cart and returns amount of items left in cart
function removeLineFromCart(productId, color) {
  const currentCart = getCartFromLocalStorage();

  const updatedCart = currentCart.filter(
    item => item.productId !== productId || item.color !== color
  );

  localStorage.setItem("shoppingCart", JSON.stringify(updatedCart));
  return updatedCart.length;
}

// Removes a single item from the shopping cart and returns amount of items left in cart
function removeSingleItemFromCart(lineItemId) {
  const currentCart = getCartFromLocalStorage();
  
  const updatedCart = currentCart.filter(
    item => item.lineItemId !== lineItemId
  );

  localStorage.setItem("shoppingCart", JSON.stringify(updatedCart));
  return updatedCart.length;
}

/* Adds another item of the same type and option to the
cart if it's available. Returns amount of items in cart */
function addAnotherItemLine(item) {
  if (colorIsAvailable(item.productId, item.color)) {
    const newCartObject = {
      lineItemId: Date.now(),
      productId: item.productId,
      name: item.name,
      price: item.price,
      color: item.color,
      storage: item.storage,
      power: item.power,
    };

    addToCart(newCartObject);
  }
  return getAmountInCart();
}

export {
  addToCart,
  addAnotherItemLine,
  colorIsAvailable,
  itemIsAvailable,
  getAmountInCart,
  getCartFromLocalStorage,
  getItem,
  getOptionAmountInCart,
  getQuantityAvailable,
  getSortedCart,
  getTotalSum,
  removeLineFromCart,
  removeSingleItemFromCart,
};
