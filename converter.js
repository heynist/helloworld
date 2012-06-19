exports.exchangeRate = function exchangeRate(rate) {
    return function(euro) { return euro/rate; }
}
