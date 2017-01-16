let AddService = function ($http, APP) {

  this.addItem = addItem;

  function addItem (data, type) {
    let url = APP.URL + type + '/new';

    APP.CONFIG.headers = { 'Content-Type': undefined }

    return $http.post(url, data, APP.CONFIG);
  }

}

AddService.$inject = ['$http', 'APP'];
export default AddService;