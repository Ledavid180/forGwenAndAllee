//Store Information

//Pseudocode => computer instructions written in basic people talk

/* 
    Data/Information => food that a computer needs to perform a task

    Type => specific peice of data
    Five primitive data types
        strings
        number
        boolean
        null
        undefined

        variable => a simple container that holds a singular piece of data

        var(keyword to create a variable in js)

        syntax =>
            var varName;
            var varName = data;

            *******NAMING IS IMPORTANT!!!!!!********

            '=' assignment operator 'gets'

            RULES
                var keyword
                naming is important
                must begin with a letter; in almost all cases use a lowercase letter
                no numbers at the beginning, but they can be used elsewhere
                no special characters...EVER!!!!!!!

                for multi word variables:
                    use underscores or camelCase
                    ex: var my_name OR var myName
                    PascalCase(special cases for using this, gernerally DO NOT USE)

                    var 'hello' = greeting CAN NOT DO THIS




*/

var greeting = 'Hello World';
console.log(greeting);

/*
    STRINGS

    basic character text (the keys on the keyboard)

    anything in quotes

    can be single or double quotes

    'hello'
    "hello"


*/

var string1 = 'I am a string!';

var string2 = "I am a string, too!";

var string3 = "I'm a string as well!";

console.log(string1);
console.log(string2);
console.log(string3);


/*
    NUMBERS

    actual numerical values

    in some programming languages numbers are split up(integer, float)

    can be calculated
*/

var num = 6;
console.log(num); //6
// var num2 = 8;
// var sum = num + num2 + 6; 
// console.log(sum);//20

var foo;
console.log(foo); //undefined

var boo = 'I have value!';
console.log(boo);// I have a value

num = 8;

var sum = num + 6;
console.log(sum);

/*
    ARITHMETIC OPERATORS
        + => addition
        - => subtraction
        * => multiplication
        / => division
        ** => exponents
        % => modulus

 */

console.clear();

var a = 10;
var b = 2;

console.log(a - b);// 8
console.log(b - a);//-8

console.log(a * b); //20
console.log(a / b); //5
console.log(b / a); //20

console.log(a ** b); //100
console.log(a % b); //0 **modulus => divide and take remainder. remainder is the answer

//PEMDAS => please excuse my dead aunt sally(ORDER OF OPERATIONS)
// parentheses, expoents, multiplcation/division, addition/subtraction

//write a program that will convert a degree in celsius to a degree in fahrenheit and vice versa

//PSEUDOCODE

/*
    VARIABLES
        fah(temp in fahrenheit)
        cel(temp in celsius)
        temp(temp we are converting)

    DO STUFF
        SET temp to 65
        SET cel EQUALS (temp MINUS 32) TIMES 5 DIVIDED BY 9
        OUTPUT cel

        SET temp to 65
        SET fah EQUALS (temp TIMES 9 DIVIDED BY 5) PLUS 32
        OUTPUT fah
*/


var temp = 65;

var cel = (temp - 32) * (5 / 9);
var fah = (temp * (9 / 5)) + 32;

console.log(cel);
console.log(fah);

var hello = 'Hello';
var world = 'World';

//Concatenation +
console.log(hello + ' ' + world); 

console.log(hello - world);//NaN
// console.log(hello - 6);

console.log(hello + 6);//hello6 or hello hello hello hello hello helo or NaN
console.log(hello * 6);

console.clear();

console.log('1' + '1'); //the string 11
console.log(1 + 1); //the number 2
console.log('Letter' + 1);//Letter1 => Type Coersion

console.log('12' - 123);//NaN or ERROR
console.log(12**2);//144
console.log('12'**2);//144