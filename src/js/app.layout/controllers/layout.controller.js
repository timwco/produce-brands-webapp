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

  $scope.$on('user:updated', (event, user) => {
    vm.user = user;
    if (user) {
      vm.adminUser = user.is_admin;
    } else {
      vm.adminUser = null;
    }
  });

  function searchForm (term) {
    vm.term = "";
    $state.go('root.search', {q: term});
  }

};
LayoutController.$inject = ['UserService', '$scope', 'APP', '$state'];
export default LayoutController;
