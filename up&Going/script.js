// Write a program to calculate the total price of your phone purchase

const taxRate = 0.09;
const phonePrice = 99.99;
const accessoryPrice = 19.99;
const bankAccountBalance = 800;

/* 
Keep purchasing phones (loop) until you run out of money in bank
Also buy accessory for each phone as long as purchse amount is
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
    /* need to stop it adding a new phone if new addtion causes price to go over
    Also need to add in a tax check to the total price 
    MAKE SURE YOU DO IT FOR BOTH PHONE AND ACC*/
    while((purchaseAmount + (calcTax(purchaseAmount)))<= bankAccountBalance)  {
        purchaseAmount += phonePrice;
        phoneCount ++;
        if((purchaseAmount + accessoryPrice) < purchaseAmount) {
            purchaseAmount += accessoryPrice;
            accessoryCount++;
        }
    }
    var purchaseAmountPlusTax =  calcTax(purchaseAmount);
    var purchaseAmountFormated = formatPricing(purchaseAmountPlusTax);
    return purchaseAmountFormated;
}
