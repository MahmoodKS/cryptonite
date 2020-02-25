const coinCollapseOnShowHandler = (event) => {
    const $content = $(event.target);
    const id = $content.data('id');

    if (CACHE.coinsInfo[id]) {
        handler(CACHE.coinsInfo[id]);
    }
    else {
        $.getJSON(`${VIEW_API_ENDPOINT}${id}`, (response) => {
            const { image: { thumb }, market_data: { current_price: { eur, ils, usd } } } = response;

            CACHE.coinsInfo[id] = {
                thumb,
                eur,
                ils,
                usd,
            };

            handler(CACHE.coinsInfo[id]);
        });
    }

    function handler(info) {
        const { thumb, eur, ils, usd } = info;
        const $img = $('<img>', { src: thumb });

        $content.empty();
        $content.append($img);
        $content.append(eur);
        $content.append(ils);
        $content.append(usd);
    }
};

const onSwitchChangeHandler = (event) => {
    const $self = $(event.target);
    const id = $self.data('id');
    const isOn = $self.prop('checked');

    if (isOn) {
        CACHE.selectedCoins[id] = true;
    }
    else {
        delete CACHE.selectedCoins[id];
    }

    if (Object.keys(CACHE.selectedCoins).length >= 5) {
        $('.toggle.off .switches').attr('disabled', true);
    }
    else {
        $('.toggle .switches').prop('disabled', false);
    }
};

const addCoinsToDom = (coins) => {
    const $row = $('<div>', { class: 'row' });

    $.each(coins, (i, coin) => {
        const { id, symbol, name } = coin;// destructure
        const htmlId = `coin-${id}-info`;
        const $coin = $('<div>', {
            id,
            class: `${SELECTORS.CURRENCY.replace('.', '')} col-xs-12 col-sm-6 col-md-4 col-lg-3`,
        });
        const $content = $('<div>', { class: 'row' });
        const $leftCol = $('<div>', { class: 'col-lg-6' });
        const $rightCol = $('<div>', { class: 'col-lg-6' });
        const $leftContent = $('<div>', { class: 'row' });
        const $symbol = $('<div>', { class: 'col-lg-12 symbol' });
        const $name = $('<div>', { class: 'col-lg-12' });
        const $moreInfo = $('<div>', { class: 'col-lg-12' });
        const $moreInfoBtn = $(
            '<button>',
            {
                class: 'btn btn-primary',
                type: 'button',
                'data-toggle': 'collapse',
                'data-target': `#${htmlId}`,
                'aria-expanded': false,
                'aria-controls': htmlId,
            });
        const $moreInfoContent = $('<div>',
            {
                class: 'collapse multi-collapse',
                id: htmlId,
            })
            .data('id', id)
            .on('show.bs.collapse', coinCollapseOnShowHandler);
        const $switch = $('<input>', {
            class: 'switches',
            type: 'checkbox'
        })
        .data('id', id)
        .on('change', onSwitchChangeHandler);

        $symbol.text(symbol.toUpperCase());
        $name.text(name);
        $moreInfoBtn.text('More Info');

        $moreInfo.append($moreInfoBtn);
        $moreInfo.append($moreInfoContent);

        $leftContent.append($symbol);
        $leftContent.append($name);
        $leftContent.append($moreInfo);

        $leftCol.append($leftContent);

        $rightCol.append($switch);

        $content.append($leftCol);
        $content.append($rightCol);

        $coin.append($content);

        $row.append($coin);
    });

    $(SELECTORS.CURRENCIES).append($row);

    // After this line, everything is in the DOM
    $('.switches').bootstrapToggle({
        onstyle: 'success',
        offstyle: 'info',
        checked: true,
    });
};
