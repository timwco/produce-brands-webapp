let SearchService = function($http) {

  let url = 'https://produce-api.herokuapp.com/';

  this.query = query;

  function query (q) {
    return $http.get(url + 'brands');
  }

};
SearchService.$inject = ['$http'];
export default SearchService;