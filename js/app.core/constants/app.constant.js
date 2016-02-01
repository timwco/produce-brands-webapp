// Define URL's (add trailing slash)
let development = 'http://localhost:5000/';
let production = 'https://api.producebrands.com/';

export default {
  URL: (window.location.href.indexOf("localhost") > 0) ? development : production,
  CONFIG: { headers: {} },
  VERSION: 0.2,
  YEAR: 2016
};
