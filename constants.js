const API_ENDPOINT = 'https://api.coingecko.com/api/v3/coins/list';
const VIEW_API_ENDPOINT = 'https://api.coingecko.com/api/v3/coins/';
const MAX_COINS = 5;

const SELECTORS = {
    HOME: '#home',
    CURRENCIES: '#currencies',
    CURRENCY: '.currency',
};

const LOADING_SPINNER = '<svg id="svg-spinner" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">' +
'<circle cx="24" cy="4" r="4" fill="black"/>' +
'<circle cx="12.19" cy="7.86" r="3.7" fill="black"/>' +
'<circle cx="5.02" cy="17.68" r="3.4" fill="black"/>' +
'<circle cx="5.02" cy="30.32" r="3.1" fill="black"/>' +
'<circle cx="12.19" cy="40.14" r="2.8" fill="black"/>' +
'<circle cx="24" cy="44" r="2.5" fill="black"/>' +
'<circle cx="35.81" cy="40.14" r="2.2" fill="black"/>' +
'<circle cx="42.98" cy="30.32" r="1.9" fill="black"/>' +
'<circle cx="42.98" cy="17.68" r="1.6" fill="black"/>' +
'<circle cx="35.81" cy="7.86" r="1.3" fill="black"/>' +
'</svg>';