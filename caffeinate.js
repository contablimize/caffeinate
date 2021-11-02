
class Customer {

    orders() {

    }

    pays_with_credit() {

    }
}

class Associate {
    process_payment(price, card_minimum) {
        return price >= card_minimum;
    }
}

module.exports = { Customer, Associate };
