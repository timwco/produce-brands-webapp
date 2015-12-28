let SearchService = function($http, APP) {

  this.query = query;
  this.getListing = getListing;

  // Standard Query
  function query (q) {
    return $http.get(APP.URL + 'brands', APP.CONFIG);
  }

  // Get Listing Results
  function getListing (type) {
    return $http.get(APP.URL + type, APP.CONFIG);
  }



};
SearchService.$inject = ['$http', 'APP'];
export default SearchService;