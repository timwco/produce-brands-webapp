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
    console.log(args);
    vm.user = args;
    vm.adminUser = args.is_admin;
  });

  function searchForm (term) {
    vm.term = "";
    $state.go('root.search', {q: term});
  }

};
LayoutController.$inject = ['UserService', '$scope', 'APP', '$state'];
export default LayoutController;
