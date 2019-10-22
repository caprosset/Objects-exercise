// 1. Pick a penguin from Wikipedia's List of Fictional Penguins and create an object named myPenguin with properties that represent the information listed in each column on that Wikipedia page (for example: the character's name, origin, and author)

var myPenguin = {
    name: 'Alfred',
    origin: 'Zig et Puce',
    creator: 'Alain Saint-Ogan',
    notes: 'The pet penguin of the title characters. The Angoulême International Comics Festival named the Prix Alfred award after the character.'
}

/************************************************************/

// 2. Use console.log() to print the penguin's name to the console as part of a welcome message, like "Hello, I'm a penguin and my name is [NAME HERE]!"

console.log(`Hello, I'm a penguin and my name is ${myPenguin.name}!`);

/************************************************************/

// 3. Write another line of code that adds a new property to your penguin called canFly and set it to false. (Note: Don't modify your penguin-creation code that you wrote above! Do this step in a separate line of code.)

myPenguin.canFly = false;
// console.log(myPenguin);

/************************************************************/

// 4. Add a method to your penguin called chirp that prints to the console: "CHIRP CHIRP! Is this what penguins sound like?" (Note: Again, don't modify your previous code! Do this step by writing a new line of code.)

myPenguin.chirp = () => console.log("CHIRP CHIRP! Is this what penguins sound like?");
// console.log(myPenguin);

/************************************************************/

// 5. Add another method to your penguin called sayHello that prints to the console the same message from step 2 above. But this time, be sure to use the mystical, magical, all-powerful this keyword to access your penguin's name, so that way if you change its name later, your method will still work!

myPenguin.sayHello = () => `Hello, I'm a penguin and my name is ${myPenguin.name}!`;
// console.log(myPenguin);


// 6. Next, call your penguin's sayHello() method and make sure that it works! (Hint: if you need an example of what it looks like when you call a method of an object, look at console.log() -- that's how you call the log() method of the console object!)

console.log(myPenguin.sayHello());
// ==> "Hello, I'm a penguin and my name is undefined"


// 7. Without modifying any of your previous code, change the penguin's name to "Penguin McPenguinFace" and then call your penguin's sayHello() function one more time to make sure it still works.

myPenguin.name = 'Penguin McPenguinFace';

console.log(myPenguin.sayHello());
// ==> Hello, I'm a penguin and my name is Penguin McPenguinFace

/************************************************************/

// 8. Write another method called fly, and inside that method, use an if / else statement to print "I can fly!" to the console if your penguin's canFly property is true, or "No flying for me!" if its canFly property is false.
// 9. Call your penguin's fly() method and make sure it works!

myPenguin.fly = () => myPenguin.canFly ? console.log("I can fly!") : console.log("No flying for me!");

myPenguin.fly();
// ==> No flying for me!


// 10. Change the canFly property to true -- again, without modifying any of your previous code
// 11. Now call your penguin's fly() method again and make sure it works as expected!

myPenguin.canFly = true;
myPenguin.fly();
// ==> I can fly!

/************************************************************/

// 12. Write a for ... in loop to print each key to the console.

for(var ele in myPenguin) {
    console.log(ele);
}

// 13. Write another for ... in loop to print the value of each key to the console. (Hint: You'll need to use bracket notation to access the values this way, instead of dot notation!)

for(var ele in myPenguin) {
    console.log(myPenguin[ele]);
}

/************************************************************/