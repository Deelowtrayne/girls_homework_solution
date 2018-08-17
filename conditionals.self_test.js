// Cool challenges to test your understanding of variables and conditional statements

// 1. Write a JavaScript program that accept two integers and display the larger.

var num1 = 54;
var num2 = 31;

if (num1 > num2) {
    document.write('num1 is larger');
    // document.write('largest number is ' + num1);
} else {
    document.write('num2 is larger');
    // document.write('largest number is ' + num2);
}

// 2. Write a JavaScript conditional statement to find the sign of product of three numbers.
//    Display an alert box with the specified sign.
//    Sample numbers : 3, -7, 2
//    Output : The sign is -

var sum = (-4 + 6 - 5);

if (sum > 0) {
    document.write('the number is (-)');
} else if (sum < 0) {
    document.write('the number is (+)');
} else {
    document.write('the number is (0)');
}


// 3. Write a JavaScript conditional statement to sort three numbers.
//    Display an alert box to show the result. Go to the editor
//    Sample numbers : 0, -1, 4
//    Output : 4, 0, -1


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

var animal = 'cat';
var numberOfAnimals = 3;
