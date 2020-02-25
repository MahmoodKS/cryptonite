$(document).ready(() => {
    $.getJSON(API_ENDPOINT, (response) => {
        const coins = response.slice(0, 100);

        CACHE.coins = coins;
        addCoinsToDom(coins);
    });

    $('#search-btn').click(() => {
        const $search = $('#search');
        const val = $search.val();

        doSearch(val);
    });
});