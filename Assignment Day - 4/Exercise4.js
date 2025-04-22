// String types
let favActorFirstName = "Tomba";
let favActorLastName = "Diggie"
let fullName = favActorFirstName + favActorLastName;
let funnName = favActorFirstName.concat(favActorLastName);

// cases
console.log(funnName.toLowerCase());
console.log(favActorFirstName.toUpperCase());

// Add message
console.log(`My favourite actor is ${favActorLastName}`);

// append message 
let appendString = (fullName += " is the best actor in the world.");
console.log(appendString);

// Slice
console.log(funnName.slice(2, 6));

//split and join
console.log(favActorFirstName.split(" ").join("_"));