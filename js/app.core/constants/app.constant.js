// Define URL's (add trailing slash)
let development = 'http://localhost:3000/';
let production = '';

export default {
  URL: (window.location.href.indexOf("localhost")) ? development : production,
  CONFIG: { headers: {} },
  VERSION: 0.1
};