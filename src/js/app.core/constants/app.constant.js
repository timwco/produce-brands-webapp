// Define URL's (add trailing slash)
let development = 'http://localhost:5000/';
let production = 'https://api.producebrands.com/';

export default {
  URL: (window.location.href.indexOf("localhost") > 0) ? development : production,
  CONFIG: { headers: {} },
  VERSION: 1.6, // Also Change on `index.html` page for Cache
  YEAR: 2017
};
