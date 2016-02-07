let LayoutController = function (UserService, $scope, APP, $state) {

  let vm = this;

  vm.logout = logout;
  vm.user = null;
  vm.version = APP.VERSION;
  vm.year = APP.YEAR;
  vm.searchForm = searchForm;

  function logout () {
    UserService.logout();
  }

  $scope.$on('user:updated', (event, args) => {
    vm.user = args;
  });

  function searchForm (term) {
    $state.go('root.search', {q: term});
  }

};
LayoutController.$inject = ['UserService', '$scope', 'APP', '$state'];
export default LayoutController;
