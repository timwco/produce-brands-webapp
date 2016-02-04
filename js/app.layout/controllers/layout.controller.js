let LayoutController = function (UserService, $scope, APP) {

  let vm = this;

  vm.logout = logout;
  vm.user = null;
  vm.version = APP.VERSION;
  vm.year = APP.YEAR;

  function logout () {
    UserService.logout();
  }

  $scope.$on('user:updated', (event, args) => {
    vm.user = args;
  });

};
LayoutController.$inject = ['UserService', '$scope', 'APP'];
export default LayoutController;
