let EditService = function($http, APP) {

  this.updateItem = (item, type, id) => {
    let url = APP.URL + type + '/' + id;
    return $http.put(url, item, APP.CONFIG);
  };

};

EditService.$inject = ['$http', 'APP'];
export default EditService;
