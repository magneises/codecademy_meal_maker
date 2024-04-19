// task 1,2,3
const menu = {
  _meal: "",
  _price: 0,

  // task 4, 5 - Setter method for meal
  set meal(mealToCheck) {
    if (typeof mealToCheck === "string") {
      this._meal = mealToCheck;
    }
  },

  // task 6, 7 - Setter method for price
  set price(priceToCheck) {
    if (typeof priceToCheck === "number") {
      return this._price = priceToCheck;
    }
  },
// task 8, 9, 10, 11 - getter mehtod for todaysSpecial, if...else, and console log
  get todaysSpecial() {
    if(this._meal && this._price) {
      return `Today's Special is ${this._meal} for ${this._price}!`
    } else {
      return 'Meal or price was not set correctly!'
    }
  }

};


menu.meal = "Pizza";
menu.price = 8;

console.log(menu.todaysSpecial);





