//Trading - Constructor
function Trading(id, startprice, endprice, actualprice) {

    //CANDLE PROPERTIES
    this.Id = id,
    this.startPrice  = startprice,
    this.endPrice    = endprice,
    this.actualPrice = actualprice
};

//Price Value Direction
Trading.prototype.priceAction = function (actualPrice) {
    let priceActionDirection = 'INITIAL';

    if (this.startPrice != actualPrice) {
        priceActionDirection = 'UP';

        if (actualPrice < this.startPrice)
            priceActionDirection = 'DOWN';

    }

    return priceActionDirection;
}