//Write a JavaScript function to print (console.log()) the “Hello World” message
function printHelloWorld() {
    console.log(`Hello World`);
}
printHelloWorld;

//Write a function that returns the square of a number
function squareNumber(number) {
    let numberSquared = number*number;
    return numberSquared;
}

console.log(`the square is: ${squareNumber(4)}`);

//Write a function to convert Celsius to Fahrenheit and return the conversion
function cToFConversion(degreeCelsius) {
    let degreeFarenhiet = degreeCelsius*9/5 + 32;
    return degreeFarenhiet;
}

console.log(`the degrees in farenheit are: ${cToFConversion(38)}`);

//Write a function to print a random number. Check out Math.random()
function printRandomNumber() {
    console.log(`the random number is: ${Math.random()}`);
}

printRandomNumber();

//Write a function named tellFortune that:
//takes 4 arguments: number of children, partner's name, geographic location, job title.
//Alert your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
//Call that function 3 times with 3 different values for the arguments.

function tellFortune (numberOfChildren, partnerName, geoLocation, jobTitle) {
    let sentence = `You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${numberOfChildren} kids.`;
    alert(sentence);
}

tellFortune (4, `beth`, `london`, `engineer`);
tellFortune (2, `Yuki`, `Tokyo`, `blacksmith`);
tellFortune (3, `jess`, `detroit`, `lawyer`);

//Write a function that takes in a 7 digits number and returns the number as a string with commas as thousand separators. For example, the number 1234567 should be returned as "1,234,567"
function addComma(sevenDigitNum) {
    let firstDigit = Math.floor(sevenDigitNum/1000000);
    let middleDigits = Math.floor(sevenDigitNum%1000000/1000);
    let lastDigits = Math.floor(sevenDigitNum%1000);
    toString(firstDigit, middleDigits, lastDigits);
    console.log(`${firstDigit},${middleDigits},${lastDigits}`);
}
addComma(1234567);

//Write a function that takes in a string and returns the string with all vowels removed. For example, the string "Hello, World!" should be returned as "Hll, Wrd!".

function removeVowels(withVowels) {
    let vowelLess = withVowels.replace(/[aeiou]/gi, '');
    return vowelLess;
}

console.log(removeVowels(`hello world`));

//Write a function that takes in a number and returns the number rounded to the nearest integer. For example, the number 4.6 should be returned as 5, and the number 4.4 should be returned as 4. (check out Math methods and properties)
function roundNumber(unrounded) {
    let rounded = Math.round(unrounded);
    return rounded;
}

console.log(roundNumber(3.48));

//Bonus - Write a function that takes in a string and returns a new string with the first letter of each word capitalized. For example, the string "hello, world!" should be returned as "Hello, World!".
function upperCaseMaker(lowerCaseString) {
    let upperCaseString = lowerCaseString.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    return upperCaseString;
}

console.log(upperCaseMaker(`hello world`));

//Write a function that:
//Save the hostname of the current URL as a variable (check location.hostname)  
//Alert the sentence: “Hello, your hostname is _(your variable)_ . Welcome!”
function whatsMyHost() {
    let hostname = location.hostname;
    alert(`Hello, your hostname is _${hostname}_. Welcome!`);
}

whatsMyHost();