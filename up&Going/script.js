// Write a program to calculate the total price of your phone purchase
const taxRate = 0.09;
const phonePrice = 99.99;
const accessoryPrice = 19.99;
const bankAccountBalance = Number(prompt("How much money do you have in your bank account? "));

/* 
Keep purchasing phones (loop) until you run out of money in bank
Also buy accessory for each phone as long as purchase amount is
below mental spending threshold
*/
var purchaseAmount = 0; 
var phoneCount = 0;
var accessoryCount = 0;

//create a funciton to calculate tax rate
function calcTax(amt) {
    return amt + (amt * taxRate);
}

//create a function to format pricing with $ and round to two decimal 
function formatPricing(amt) {
    return "$" + amt.toFixed(2);
}

function purchase() {
    while((calcTax(purchaseAmount) + calcTax(phonePrice)) < bankAccountBalance)  {
        purchaseAmount += phonePrice;
        phoneCount ++;
        console.log("That is " + phoneCount + " phone(s)" + ", totaling " + formatPricing(calcTax(purchaseAmount)) + " including tax.");
        if((calcTax(purchaseAmount) + calcTax(accessoryPrice)) < bankAccountBalance) {
            console.log("oh it looks like you can also afford the accessory for your phone!");
            purchaseAmount += accessoryPrice;
            accessoryCount++;
            console.log("That is " + accessoryCount + " accessories" + ", totaling " + formatPricing(calcTax(purchaseAmount)) + " including tax.");
        }
    }
    var purchaseAmountPlusTax = calcTax(purchaseAmount);
    var purchaseAmountFormated = formatPricing(purchaseAmountPlusTax);
    return purchaseAmountFormated;
}

window.onload = function() {
    purchase(); 
}