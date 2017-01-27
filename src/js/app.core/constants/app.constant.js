// Define URL's (add trailing slash)
let development = 'http://localhost:5000/';
let production = 'https://api.producebrands.com/';

export default {
  URL: (window.location.href.indexOf("localhost") > 0) ? development : production,
  CONFIG: { headers: {} },
  VERSION: '1.6.2', // Also Change on `index.html` page for Cache
  YEAR: 2017
};

// Versions
// MAJOR version when you make incompatible API changes,
// MINOR version when you add functionality in a backwards-compatible manner, and
// PATCH version when you make backwards-compatible bug fixes.
