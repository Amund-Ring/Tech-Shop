import {
  colorIsAvailable,
  itemIsAvailable,
  getAmountInCart,
  getCartFromLocalStorage,
  getItem,
  getOptionAmountInCart,
  getSortedCart,
  getTotalSum,
  removeLineFromCart,
  removeSingleItemFromCart,
} from "../data/dataHandler";

describe("getItem", () => {
  describe("should return the matching item from the database", () => {
    it("should return 'Nintendo switch' when passed the id 4", () => {
      expect(getItem(4).name).toEqual("Nintendo switch");
    });
    it("should return 'Samsung 40 UHD Smart TV' when passed the id 8", () => {
      expect(getItem(8).name).toEqual("Samsung 40 UHD Smart TV");
    });
  });
});

describe("itemIsAvailable", () => {
  describe("should return the availability of the item with the given id", () => {
    it("should return 'true' when passed the id 3", () => {
      expect(itemIsAvailable(4)).toEqual(true);
    });
    it("should return 'false' when passed the id 5", () => {
      expect(itemIsAvailable(5)).toEqual(false);
    });
  });
});

describe("getTotalSum", () => {
  it("should return a number", () => {
    expect(typeof getTotalSum()).toEqual("number");
  });
});

describe("getAmountInCart", () => {
  it("should return a number", () => {
    expect(typeof getAmountInCart()).toEqual("number");
  });
});

describe("getOptionAmountInCart", () => {
  it("should return a number", () => {
    expect(typeof getOptionAmountInCart()).toEqual("number");
  });
});

describe("removeLineFromCart", () => {
  it("should return a number", () => {
    expect(typeof removeLineFromCart(2, "white")).toEqual("number");
  });
});

describe("removeSingleItemFromCart", () => {
  it("should return a number", () => {
    expect(typeof removeSingleItemFromCart(1635685905914)).toEqual("number");
  });
});

describe("getCartFromLocalStorage", () => {
  it("should return an array", () => {
    const returnedValue = getCartFromLocalStorage();
    expect(Array.isArray(returnedValue)).toBe(true);
  });
});

describe("getSortedCart", () => {
  it("should return an array", () => {
    const returnedValue = getSortedCart();
    expect(Array.isArray(returnedValue)).toBe(true);
  });
});
