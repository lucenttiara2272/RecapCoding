/* Task 1
Declear two variables of type int, set the value of the first variable to 1 and
the value of the second to 2.
Now swap so the first variable gets the value of the second and vice versa.
*/

/* Task 2
Without using the built in Math functionality and constants.
Calculate the area of a circle with the radius 6.
*/
const PI = 3.14;
let circleRadius = 6;

function calculateAreaOfCircle (circleRadius,PI){
 
    let areaOfCircle = PI * circleRadius* 2 * 2
    return areaOfCircle
}

console.log(calculateAreaOfCircle(circleRadius,PI));
/* Task 3
Given the two strings "If at first you do not succeed, try, try again" and
"Fall seven times, stand up eight"
Create a variable that contains all the letter that are in both strings but
only once and in alphabetical order (ofcouse this should not be done manualy).
We consider A and a the same letter.
Example: "Bac." and "d,b c" => "abcd"
*/

/* Taske 4
Declear thre variables of type int. The first two should have the values 6 and
2.
Make it so that the third variable is 10.
*/

/* Task 5
Given a variabel of type double and set to a random value (i.e. you pick the
value)
Instanciate a second variable that is true if the first variable is grather
than 22.34
*/

/* Task 6
Given the string "Life is short. Smile while you still have teeth." and the
string "The best therapy is a good laugh and great friends.".
Create a new variable that is the intersection of words between the two
strings.
Create a nre variable that is the union of words between the two strings.
Example:
Intersection -> "Hello World" and "World of Warcraft" => "World"
Union -> "Hello World" and "World of Warcraft" => "Hello World of Warcraft;
*/

/* Task 7
Given the string "The quick brown fox jumps over the lazy dog.", calculate the
sum of the ASCII values of the characters in the string.
*/

/* Task 8
Given the strings Kayak, Ship, Level, Banana. Count the number of palindromes
(reads the same backward as forward).
Example: "racecar" is a palindrome.
*/


/* Task 9
Using one for lopp, create a list of the duplicate words in the string, uses as
many lists as you need.
"If the zookeeper had to choose, would the zookeeper choose to use the moose
the zookeeper uses, or would the zookeeper choose to choose a new moose to use?"
*/


/* Task 10
Using loops combine the two arrays into one.
first arrays values: a, b, c, d, e
second arrays values: 1.1, 2.2, 3.3, 4.4, 5.5
*/

/* Task 11
Using two nested (one inside the other) for loops and a aray of type char,
create the following pattern as a string:
*******
*     *
*     *
*  *  *
*     *
*     *
*******
*/


/* Task 12
Given the following array of digits, create an array of the numbers missing
from the sequence.
Again using loops and not built in functionality.
1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
23, 24, 25, 26, 27, 28, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44,
45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65,
66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 82, 83, 84, 85, 86, 87,
88, 89, 90, 91, 92, 93, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107,
108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123,
124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 135, 136, 137, 138, 139, 140,
141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156,
157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172,
173, 174, 175, 176, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 190, 191,
192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206
*/


/* Task 13 (A bit harder)
Find the length of the longest qonsecutive sequence of chars in the string
below. Using only loops etc., no built in functionality for manipulating strings and
arrays.

aqcmhrtutdvmyiqcyoyktnfninieglriaqvuxktzkfvfncfrrhfpptgwnhrsbcyjaizodspxxenkcbzwbwn
zmoibdjpfdgzpzhoqevdjrilkzayytwycigelbrnusgzeqpimcgcazegftxrnbxinfbpnoljovywqpkfbia
mjpedhqfuunowldjnazyttfdpdcytcvhjw
*/

/* Task 14
Create a function that given an array of integers returns the largest number in
the array. Do not use any built in functionality.
*/

/* Task 15
Create a function that returns an array of n posetive integers, where n is
given as a parameter.
The numbers should be unique but not consecutive.
Do not use any built in functionality for sorting, matching etc. (You may use
Random and Math functions)
*/

/* Task 16
Create a function that given a string and a pattern returns true if the pattern
matches the string.
Do not use any built in functionality for matching (no regex)etc.
A pattern is defined as a series of *,n,s and -.
* matches anything except an empty string.
n matches any number.
s matches any string.
- matches a single space.
Example:
pattern: sssss-nnn-*****
string: "Hello 123 World"
*/

/* Task 17
Create a function that reads an indetermind number of integers from the console
and returns the sum of the numbers.
*/

/* Task 18
Create a function that given a string returns the number of words in the
string. Do not use any built in functionality for splitting strings etc.
*/

/* Task 19
Create the functions that given a color value in hex format reutns the RGB and
CMYK values as *defined types*.
Do not use any built in functionality.
Hex is defined as #RRGGBB. Where RR, GG and BB are two digit hexadecimal
numbers.
RGB is defined as three integers between 0 and 255.
CMYK is defined as four floats between 0 and 1.
The conversion from RGB to CMYK is defined as:
K = 1 - max(R, G, B) / 255
C = (1 - R / 255 - K) / (1 - K)
M = (1 - G / 255 - K) / (1 - K)
Y = (1 - B / 255 - K) / (1 - K)
Tip:
- You can use the parseInt function to convert a hex number to an integer.
- You can read a substring from a string using the substring function (Part of String)
- Notice that the task says defined types. This means you should create reusable structure
for RGB and CMYK.
- You can return multiple values from a function by imitating a tuple using an array.
*/
