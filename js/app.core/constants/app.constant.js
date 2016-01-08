// Define URL's (add trailing slash)
let development = 'http://localhost:3000/';
let production = 'http://api.producebrands.com/';

export default {
  URL: (window.location.href.indexOf("localhost") > 0) ? development : production,
  CONFIG: { headers: {} },
  VERSION: 0.1
};