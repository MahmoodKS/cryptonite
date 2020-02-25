const addCoinsToDom = (coins) => {
    const $row = $('<div>', { class: 'row' });

    $.each(coins, (i, coin) => {
        const { id, symbol, name } = coin;// destructure
        const $coin = $('<div>', {
            id,
            class: `${SELECTORS.CURRENCY.replace('.', '')} col-xs-12 col-sm-6 col-md-4 col-lg-3`,
        });
        
        $coin.text(symbol + name);
        $row.append($coin);
    });

    $(SELECTORS.CURRENCIES).append($row);
};
