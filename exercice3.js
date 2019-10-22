var myPenguin = {
    name: 'Alfred',
    origin: 'Zig et Puce',
    creator: 'Alain Saint-Ogan',
    notes: 'The pet penguin of the title characters. The Angoulême International Comics Festival named the Prix Alfred award after the character.'
}

// 1. Add a new property to your penguin called outfit and set it equal to another object with the following properties: hat, shirt, pants, and shoes -- each property should have a string as its value! (I suggest you give it a baseball cap, Hawaiian shirt, cargo shorts, and flip-flops, because wouldn't that be ridiculous?)

myPenguin['outfit'] = {
    hat: 'baseball cap',
    shirt: 'Hawaiian shirt',
    pants: 'cargo shorts',
    shoes: 'flip-flops'
}
// console.log(myPenguin.outfit);


// 2. Create a new variable called penguinHatType and set it equal to the value of the hat in your penguin's outfit! Then print your new variable to the console.

var penguinHatType = myPenguin.outfit['hat'];
console.log(penguinHatType);


// 3. Without modifying any of your previous code, write one new line of code to add an accessory property to your penguin's outfit and set it equal to the string "pocket watch" -- because penguins are classy like that!
myPenguin.outfit['accessory'] = "pocket watch";
// console.log(myPenguin.outfit['accessory']);


// 4. Write one more line of code to change the hat in your penguin's outfit to "top hat" and override the previous value. (Again, because penguins are classy!)
myPenguin.outfit['hat'] = "top hat";
// console.log(myPenguin.outfit['hat'])


// 5. This penguin is a freelancer who always works from home, so it doesn't actually need to wear any pants! Let's delete the pants property from this penguin's outfit property. 
delete myPenguin.outfit.pants; // or delete myPenguin.outfit['pants'];
// console.log(myPenguin);


// 6. Write a for ... in loop to print the value of each piece of clothing in your penguin's outfit so you can see a list of clothing items in the console.
for(var clothe in myPenguin.outfit){
    console.log(myPenguin.outfit[clothe]);
}