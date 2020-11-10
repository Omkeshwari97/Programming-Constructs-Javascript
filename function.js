//1
var prompt = require('prompt-sync')();

function fToC(temperature)
{
    return (temperature - 32) * 5 / 9;   
}

function ctoF(temperature)
{
    return (temperature * 9 / 5) + 32;
}

let choice1 = parseInt(prompt('Enter option to convert: 1. F to C 2. C to F '));
let temperature = parseInt(prompt('Enter temperature to convert : '));

switch (choice1) 
{
    case 1: if(32 <= temperature <= 212)
            {
                console.log(temperature + " F = " + fToC(temperature) + " C");
            }
            else
            {
                console.log("Incorrect value");
            }
            break;

    case 2: if(0 <= temperature <= 100)
            {
                console.log(temperature + " C = " + ctoF(temperature) + " F");
            }
            else
            {
                console.log("Incorrect value");
            }
            break;

    default: break;
}

//2
function checkPalindrome(n)
{     
    let num = n;
    let reversenum = 0;
    
    do
    {
        let r = num % 10;
        reversenum = reversenum * 10 + r;
        num = Math.floor(num/10);
    }while(num != 0)

    if(n == reversenum)
    {
        return true;
    }
    else
    {
        return false;
    }
}

let a = parseInt(prompt('Enter first number : '));
let b = parseInt(prompt('Enter second number : '));

if(checkPalindrome(a) == true)
{
    console.log(a + " is a palindrome");
}
else
{
    console.log(a + " is not a palindrome");
}

if(checkPalindrome(b) == true)
{
    console.log(b + " is a palindrome");
}
else
{
    console.log(b + " is not a palindrome");
}

//3
function checkPrime(number3)
{
    let flag = true;

    if(number3 <= 1)
    {
        flag = false;
    }
    else if(number3 == 2)
    {
        flag = true;
    }
    else if(number3 % 2 ==0)
    {
        flag = false;
    }

    for(var i = 3; i <= Math.sqrt(number3); i++)
    {
        if(number3 % i == 0)
        {
            flag = false;
            break;
        }
    }

    return flag;
}

function getPalindrome(number3)
{
    let num = number3;
    let reversenum = 0;
    
    do
    {
        let r = num % 10;
        reversenum = reversenum * 10 + r;
        num = Math.floor(num/10);
    }while(num != 0)

    if(number3 == reversenum)
    {
        return reversenum;
    }
    else
    {
        return 0;
    }
}

let number3 = parseInt(prompt('Enter a number : '));

if(checkPrime(number3))
{
    console.log(number3 + " is a prime number");

    if(getPalindrome(number3) != 0)
    {
        console.log(number3 + " is a palindrome");
        let palindrome = getPalindrome(number3);

        if(checkPrime(palindrome))
        {
            console.log("Palindrome of " + number3 + " is prime");
        }
        else
        {
            console.log("Palindrome of " + number3 + " is not prime");
        }
    }
    else
    {
        console.log(number3 + " is not a palindrome");
    }
}
else
{
    console.log(number3 + " is not a prime number");
}