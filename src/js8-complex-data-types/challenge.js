/* This challenge build upon previous knowledge and introduces the concept of complex data types (arrays of objects) */

/* 
  All challenges in this repository are seperated into four levels: Foundation, Intermediate, Advanced and Expert.
  The expectation is to complete all Foundation level challenges, with Intermediate and upwards pushing your knowledge
  and may require you to google things in order to solve them. If you find an answer online somewhere, be kind and
  share it with the group!
*/

/* Foundation Challenges */

/**
 * A function which takes an array of employee objects and returns just an array of their quotes so we can later put
 * them on the website.
 *
 * @param {{name: string, quote: string, yearsEmployed: number, isManagement: boolean}[]} employeeArr - An array of employee objects
 * @returns {string[]} A list of the employees quotes for the website
 */
export const getEmployeeQuotes = (employeeArr) => {
  // Write code here
    const employeeQuotes = employeeArr.map((employee) => {
        return employee.quote;
    });

    return employeeQuotes;
};

/**
 * A function which takes an array of employee objects and returns a new array only containing employees that are managers.
 *
 * @param {{name: string, quote: string, yearsEmployed: number, isManagement: boolean}[]} employeeArr - An array of employee objects
 * @returns {{name: string, quote: string, yearsEmployed: number, isManagement: boolean}[]} An array containing only managers
 */
export const getTheManagers = (employeeArr) => {
  // Write code here
    const employeeManagers = employeeArr.filter((employee) => {
        return employee.isManagement === true; // no need for the true as it return true by default
    });

    return employeeManagers
};

/**
 * A function which tells you the number of keys on the provided object.
 *
 * @param {object} object - The provided object with an assortment of keys
 * @returns {number} The number of the keys on the object
 */
export const getNumberOfKeys = (object) => {
  // Write code here
    const numberOfKeys = Object.keys(object).length;
    return numberOfKeys;
};

/* Intermediate Challenges */

/**
 * A function to find the most expensive item in the basket and returns it in order to offer this customer a discount
 * later on down the line.
 *
 * @param {{name: string, price: number, hasFreeShipping: boolean, quantity: number}[]} shoppingBasketArr - An array of basket items for an online shop
 * @returns {{name: string, price: number, hasFreeShipping: boolean, quantity: number}} The most expensive item in the shopping basket
 */
export const findMostExpensiveItem = (shoppingBasketArr) => {
  // Write code here
    const mostExpensiveItem = shoppingBasketArr.sort((a, b) => b.price - a.price);
    return mostExpensiveItem[0];
};

/**
 * A function which add a new key of totalPrice to each shopping basket item in the array where total cost is
 * the price * the quantity of items ordered i.e.
 * {
 *  name: "jeans",
 *  price: 30,
 *  hasFreeShipping: false,
 *  quantity: 2,
 *  totalPrice: 60
 * }
 * Then returns a new array of objects
 *
 * @param {{name: string, price: number, hasFreeShipping: boolean, quantity: number}[]} shoppingBasketArr - An array of basket items for an online shop
 * @returns {{name: string, price: number, hasFreeShipping: boolean, quantity: number, totalPrice: number}[]} A new array where each object has had a total price added to it
 */
export const settotalPrice = (shoppingBasketArr) => {
  // Write code here
    const shoppingBasketWithTotals = shoppingBasketArr.map((item) => {
        const newItem = { ...item };
        const totalPrice = newItem.price * newItem.quantity;
        newItem.totalPrice = totalPrice;
        return newItem;
    });

    return shoppingBasketWithTotals;
};

/**
 * A function which sums the total cost of every item in the array and returns it as a single number.
 *
 * @param {{name: string, price: number, hasFreeShipping: boolean, quantity: number, totalPrice: number}[]} shoppingBasketArr - An array of basket items for an online shop
 * @returns {number} The total cost of the order
 */
export const totalShoppingBasket = (shoppingBasketArr) => {
  // Write code here
    const totalPrices = shoppingBasketArr.map(item => item.totalPrice); // [35, 60, 60, 25, 5]
    const totalOrder = totalPrices.reduce((a, b) => a + b);

    return totalOrder;
};

/* Advanced Challenges */

/**
 * A function which takes an array of meal objects, removes unneeded keys from the objects and returns a new array of
 * meal objects.
 *
 * @param {{id: number, name: string, ingredients: string[], country: string, timeStamp: number, userCreated: string}[]} mealsArr - An array containing meal objects
 * @returns {{id: number, name: string, ingredients: string[], country: string}[]} An array of cleaned meal objects
 */
export const getImportantKeys = (mealsArr) => {
  // Write code here
  //   // delete operator - output is the same but modifies the array.  You can use the ...spread operator initially to copy the array first.
  //   const newMealsArr = mealsArr.map(item => {
  //       delete item.timeStamp;
  //       delete item.userCreated
  //       return item;
  //   });
  //
  //   return newMealsArr;

    const newMealsArr = mealsArr.map(meal => {
        const newMeal = { id: meal.id, name: meal.name, ingredients: meal.ingredients, country: meal.country };
        return newMeal;
    });

    return newMealsArr;
};

/**
 * A function which takes an array of meal objects and check if every object contains the necessary keys. If a key is
 * missing it adds a default value instead.
 * default values:
 * isVegetarian = false
 * timeToCook = 15
 *
 * @param {{id: number, name: string, ingredients: string[], country: string, isVegetarian?: boolean, timeToCook?: number}[]} mealsArr - An array containing meal objects
 * @returns {{id: number, name: string, ingredients: string[], country: string, isVegetarian: boolean, timeToCook: number}[]}
 */
export const setImportantKeys = (mealsArr) => {
  // Write code here
    // create a new array object (map) which includes all the keys
    // for the two keys insert a ternary operator to include defaults
    const newMealsArr = mealsArr.map(meal => {
        const fullMealObject = {
            id: meal.id,
            name: meal.name,
            ingredients: meal.ingredients,
            country: meal.country,
            isVegetarian: !meal.isVegetarian === false,
            timeToCook: meal.timeToCook ? meal.timeToCook : 15
        }

        return fullMealObject;
    });

    return newMealsArr;
};

/* Expert Challenge */

/**
 * A function that takes a raw response from a cocktail API and turn each object in the response into a cleaner form
 * so that it is easier to work with.
 *
 * @param {{
 *  idDrink: number,
 *  strDrink: string,
 *  strCategory: string,
 *  strAlcoholic: string,
 *  strInstructions: string,
 *  strIngredient1: string | null,
 *  strIngredient2: string | null,
 *  strIngredient3: string | null,
 *  strIngredient4: string | null,
 *  strIngredient5: string | null,
 *  strIngredient6: string | null
 * }[]} cocktailData - The raw response from the cocktail API
 * @returns {{
 *  id: number,
 *  drink: string,
 *  category: string,
 *  alcoholic: string,
 *  instructions: string,
 *  ingredients: string[],
 * }[]} A Cleaned array of cocktail data
 */
export const cleanCocktailResponseData = (cocktailData) => {
  // Write code here
    const newCocktailData = cocktailData.map(cocktail => {
        const ingredients = [
            cocktail.strIngredient1,
            cocktail.strIngredient2,
            cocktail.strIngredient3,
            cocktail.strIngredient4,
            cocktail.strIngredient5,
            cocktail.strIngredient6
        ]

        const filterIngredients = ingredients.filter(ingredient => !ingredient === false);

        const newCocktailStructure = {
            id: cocktail.idDrink,
            drink: cocktail.strDrink,
            category: cocktail.strCategory,
            alcoholic: cocktail.strAlcoholic,
            instructions: cocktail.strInstructions,
            ingredients: filterIngredients
        };

        return newCocktailStructure;
    });

    return newCocktailData;
};
