const { Customer, Associate } = require('../../caffeinate');
const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let maria = new Customer();
let li = new Associate();
let price = 0;
const card_minimum = 2;

Given('Maria orders ${int} of coffee from Li', function (int) {
    price = int;
    maria.orders();
});

When('Maria pays with a credit card', function () {
    maria.pays_with_credit();
});

Then('Li should process the payment', function () {
    assert(li.process_payment(price, card_minimum));
});

Then('Li should process not the payment', function () {
    assert(li.process_payment(price, card_minimum) === false);
});
