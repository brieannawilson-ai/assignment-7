console.log("Hello World!");
// 1. Create an array called favoriteFoods with at least 6 foods you love.
favoriteFoods = ["Watermelon", "Ramen", "Tacos", "Honey Nut Cheerios", "Pickles", "Pasta"];


// 2. Loop through the list and print: "One of my favorite foods is ______."
for food in favoriteFoods = ("One of my favorite foods is {food}.")


// 3. Print out the rating for each food with a ranking like:
// "My #1 favorite food is Ramen" (copy/paste for all items)
// "My #2 favorite food is Sushi"
// ...etc.
for i in range(len(favoriteFoods)):
    print(f"My #{i + 1} favorite food is {favoriteFoods[i]}")



// 4a. Create a function printFoodRecommendation(foodName) that prints out the following for the foodName provided
    // "Have you ever tried ____?"
    // "I always recommend ____ to friends."
    // "Trust me — ____ is delicious."
def printFoodRecommendation(foodName):
    print(f"Have you ever tried {foodName}?")
    print(f"I always recommend {foodName} to friends.")
    print(f"Trust me — {foodName} is delicious.")



// 4b. Call the function at least 3 times
printFoodRecommendation("Sushi")
printFoodRecommendation("Pizza")
printFoodRecommendation("Ice Cream")


// Here's a list of 50 friends' favorite foods:
let friendFavorites = [
    "Pizza", "Sushi", "Pasta", "Falafel", "Burgers", "Ramen", "Pad Thai", "Curry", "Pho", "Nachos", "Gnocchi", "Donuts", "Steak", "Lasagna", "Biryani", "Tacos", "Croissant", "Churros", "Fried Rice", "Shawarma", "Miso Soup", "BBQ Ribs", "Hotpot", "Enchiladas", "Baklava", "Gyros", "Hummus", "Empanadas", "Pancakes", "Muffins", "Samosas", "Macarons", "Quiche", "Pierogi", "Arepas", "Okonomiyaki",
  ];

// 5. Print out only foods that have an "a" in the name. For example, "Pizza" would not be included, but "Pasta" would be.
for food in favoriteFoods:
    if "a" in food.lower():
        print(food)


// 6. Store the result in an array called foodsWithA. Print out the array.
let foodsWithA = [food for food in favoriteFoods if "a" in food.lower()]
print(foodsWithA)

// 7. Create a new array longFoodNames for foods with names longer than 6 characters.
longFoodNames = [food for food in favoriteFoods if len(food) > 6]

// 8. Create another array shortFoodNames for foods 6 characters or shorter.
shortFoodNames = [food for food in favoriteFoods if len(food) <= 6]

// 9. Print both arrays and compare:
// "There are more long-named foods." OR "There are more short-named foods."
print("Long-named foods:", longFoodNames)
print("Short-named foods:", shortFoodNames)
if len(longFoodNames) > len(shortFoodNames):
    print("There are more long-named foods.")
elif len(longFoodNames) < len(shortFoodNames):
    print("There are more short-named foods.")
else:
    print("There are an equal number of long-named and short-named foods.")

// 10. STRETCH: Find the longest food name and print:
// "The longest food name in the list is ______ with ___ characters."
longestFood = max(favoriteFoods, key=len)
print(f"The longest food name in the list is {longestFood} with {len(longestFood)} characters.")