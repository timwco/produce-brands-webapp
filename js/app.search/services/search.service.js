let SearchService = function($http, APP) {

  this.search = search;
  this.getListing = getListing;

  // Standard Query
  function search (q) {
    let url = APP.URL + 'search?q=' + q;
    return $http.get(url, APP.CONFIG);
  }

  // Get Listing Results
  function getListing (type, page) {
    let p = page ? page : 1;
    let url = APP.URL + type + '?page=' + p;
    return $http.get(url, APP.CONFIG);
  }



};
SearchService.$inject = ['$http', 'APP'];
export default SearchService;