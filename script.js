$(document).ready(() => {
    let promise = $.getJSON(API_ENDPOINT);

    $(SELECTORS.CURRENCIES).empty().append(createSpinner());

    promise.then(response => {
        const coins = response.slice(0, 100);

        CACHE.coins = coins;
        addCoinsToDom(coins);
    });

    $('#search-btn').click(() => {
        const $search = $('#search');
        const val = $search.val();

        doSearch(val);
    });

    $('#go-to-live-report').click(() => {
        $('#live-report-tab').tab('show');
    });

    $('#live-report-tab').on('shown.bs.tab', addCoinsToLiveReport);
});
