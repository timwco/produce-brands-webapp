let HomeController = function(UserService, $state, Flash, $scope) {

  let vm = this;
  // vm.apply = apply;

  activate();

  function activate () {
    let user = UserService.currentUser();
    if (user) { $state.go('root.landing'); }
  }

  // function apply (user) {
  //   if (!user || !user.full_name || !user.company || !user.comment) {
  //     return Flash.create('warning', 'Error: All fields are required.');
  //   }
  //   UserService.apply(user).then( (res) => {
  //     Flash.create('success', 'Application Recieved. We will be in touch! Thanks!');
  //     $scope.user = {};
  //   });
  // }

};

HomeController.$inject = ['UserService', '$state', 'Flash', '$scope'];

export default HomeController;
