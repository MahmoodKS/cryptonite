const addCoinsToDom = (coins) => {
    $.each(coins, (i, coin) => {
        const { id, symbol, name } = coin;// destructure
        const $coin = $('<div>', { class: SELECTORS.CURRENCY, id });

        $coin.text(symbol + name);
        $(SELECTORS.CURRENCIES).append($coin);
    });

};
