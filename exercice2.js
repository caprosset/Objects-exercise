var myPenguin = {
    name: 'Alfred',
    origin: 'Zig et Puce',
    creator: 'Alain Saint-Ogan',
    notes: 'The pet penguin of the title characters. The Angoulême International Comics Festival named the Prix Alfred award after the character.'
}

// 1. Add a new property to your penguin called favoriteFoods and set it equal to an array containing a list of three strings.
// 2. Access your penguin's second favorite food and print it to the console using console.log()
myPenguin.favoriteFoods = ['bravas', 'fish', 'peas'];
console.log(myPenguin.favoriteFoods[1]);

// 3. Create a new variable called firstFavFood and set it equal to the first item in your penguin's array of favorite foods.
var firstFavFood = myPenguin.favoriteFoods[0];
// console.log(firstFavFood);

// 4. Add another food to the end of the list.
myPenguin.favoriteFoods.push('brussel sprouts');
// console.log(myPenguin.favoriteFoods);

// 5. Print the length of your penguin's favoriteFoods array to the console with console.log()
console.log(myPenguin.favoriteFoods.length);

// 6. Without modifying any of your previous code, write a new line of code that changes the value of the last item in the list to "pineapples" (overwriting the previous value).
myPenguin.favoriteFoods[myPenguin.favoriteFoods.length-1] = 'pinapples';
/* or
myPenguin.favoriteFoods.pop();
myPenguin.favoriteFoods.push('pinapples');
*/
// console.log(myPenguin.favoriteFoods);

// 7. Create a new variable named lastFavFood that will always point to the last element of your penguin's favoriteFoods array, no matter how many items are in the list.
var lastFavFood = myPenguin.favoriteFoods[myPenguin.favoriteFoods.length-1];
// console.log(lastFavFood);

// 8. Write a for loop to iterate through every food in your penguin's favoriteFood property and print each one to the console.
for(var i = 0; i < myPenguin.favoriteFoods.length; i++){
    console.log(myPenguin.favoriteFoods[i]);
}

