let SearchService = function($http, APP) {

  this.query = query;
  this.getListing = getListing;

  // Standard Query
  function query (q) {
    return $http.get(APP.URL + 'brands', APP.CONFIG);
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