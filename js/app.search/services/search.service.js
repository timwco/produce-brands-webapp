let SearchService = function($http, APP) {

  this.query = query;

  // Standard Query
  function query (q) {
    return $http.get(APP.URL + 'brands');
  }



};
SearchService.$inject = ['$http', 'APP'];
export default SearchService;