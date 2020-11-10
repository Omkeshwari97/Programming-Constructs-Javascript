//1
var prompt = require('prompt-sync')();

let number1 = parseInt(prompt('Enter a number : '));
let i = 0;

while(i <= number1 && Math.pow(2,i) <= 256)
{
    console.log("2  raise to " + i + " = " + Math.pow(2, i));
    i++;
}

//2
let n2 = parseInt(prompt('Enter a number to check if it is a magic number: '));
let number2 = n2;
let sum = 0;

while(number2 > 0 || sum > 9)
{
    if(number2 == 0)
    {
        number2 = sum;
        sum = 0;
    }

    sum = sum + number2 % 10;
    number2 = Math.floor(number2 / 10);
}

if(sum == 1)
{
    console.log(n2 + " is a magic number");
}
else
{
    console.log(n2 + " is not a magic number");
}

//3
let i3 = 1;

while(i3 <= 11)
{
    let flip = Math.floor(1 + Math.random() * 2);

    if(flip == 1)
    {
        console.log(i3 + " time : " + "Heads");
    }
    else
    {
        console.log(i3 + " time : " + "Tails");
    }
    i3++;
}

//4
let money = 100;
let wincount = 0;
let betcount = 0;
let initialmoney = 1;

while(money != 0 && money <200)
{
    let chance = Math.floor(1 + Math.random() * 2);

    if(chance == 1)
    {
        money = money + initialmoney;
        console.log(betcount + " time : " + "Won" + " Current Money : " + money);
    }
    else
    {
        console.log(betcount + " time : " + "Loose" + " Current Money : " + money);
        money = money - initialmoney;
    }
    
    betcount++;
}