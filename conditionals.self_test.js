// Cool challenges to test your understanding of variables and conditional statements

// 1. Write a JavaScript program that accept two integers and display the larger.

var num1 = 54;
var num2 = 31;

if (num1 > num2) {
    console.log('num1 is larger');
    // console.log('largest number is ' + num1);
} else {
    console.log('num2 is larger');
    // console.log('largest number is ' + num2);
}

// 2. Write a JavaScript conditional statement to find the sign of product of three numbers.
//    Display an alert box with the specified sign.
//    Sample numbers : 3, -7, 2
//    Output : The sign is -

var sum = (-4 + 6 - -5);

if (sum > 0) {
    console.log('the number is (-)');
} else if (sum < 0) {
    console.log('the number is (+)');
} else {
    console.log('the number is (0)');
}


// 3. Write a JavaScript conditional statement to sort three numbers.
//    Display an alert box to show the result. Go to the editor
//    Sample numbers : 0, -1, 4
//    Output : 4, 0, -1

var sum2 = (-4 + 6 + 5);

if (sum2 > 0) {
    console.log('the number is +' + sum2);
}  else {
    console.log('the number is ' + sum2);
}


// 4. Write a JavaScript conditional statement to find the largest of five numbers.
//    Display an alert box to show the result. Go to the editor
//    Sample numbers : -5, -2, -6, 0, -1
//    Output : 0

// 5. Write a JavaScript conditional statement that:
//    checks 2 variables, a noun and a number and
//    print the number and pluralized form, like "5 cats" or "1 dog".
//    Call that function for a few different scores and log the result to make sure it works.
//    Bonus: Make it handle a few collective nouns like "sheep" and "geese".
//    HINT: it's an if-else-if

var collectives = ['sheep', 'fish', 'goose'];
var animal = 'cat';
var numberOfAnimals = 3;

if (numberOfAnimals > 1 && collectives.includes(animal)) {

    if (animal === 'goose') {
        console.log(numberOfAnimals + ' geese');
    } else {
        console.log(numberOfAnimals + ' ' + animal);
    }

} else if (numberOfAnimals > 1) {

    console.log(numberOfAnimals + ' ' + animal + 's');

} else if (numberOfAnimals === 1) {

    console.log('lonely ' + animal);

} else {

    console.log('no ' + animal + ' :(');

}


