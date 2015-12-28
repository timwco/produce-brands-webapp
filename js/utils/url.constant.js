// Production Setup
let production =  {
  URL: ''
};

// Development Setup
let development = {
  URL: 'http://localhost:3000/'
};

// Check for localhost (development)
let exported = (window.location.href.indexOf("localhost")) ? development : production;

export default exported;