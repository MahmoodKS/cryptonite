$(document).ready(() => {
    $.getJSON(API_ENDPOINT, (response) => {
        const coins = response.slice(0, 100);
        addCoinsToDom(coins);
    });
});