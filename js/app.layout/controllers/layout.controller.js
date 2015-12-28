let LayoutController = function (UserService, $scope) {

  let vm = this;

  vm.logout = logout;
  vm.user = null;

  function logout () {
    UserService.logout();
  }

  $scope.$on('user:updated', (event, args) => {
    vm.user = args;
  });

};
LayoutController.$inject = ['UserService', '$scope'];
export default LayoutController;