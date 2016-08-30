let HomeController = function(UserService, $state, Flash, $scope) {

  let vm = this;
  vm.sendSearch = sendSearch;

  activate();

  function activate () {

  }

  function sendSearch (query) {
    $state.go('root.search', {q: query });
  }

};

HomeController.$inject = ['UserService', '$state', 'Flash', '$scope'];

export default HomeController;
