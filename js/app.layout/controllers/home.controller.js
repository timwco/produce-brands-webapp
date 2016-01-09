let HomeController = function(UserService, $state, Flash) {
  
  let vm = this;
  vm.apply = apply;

  activate();

  function activate () {
    let user = UserService.currentUser();
    if (user) { $state.go('root.start'); }
  }

  function apply (user) {
    if (!user || !user.full_name || !user.company || !user.reason) {
      return Flash.create('warning', 'Error: All fields are required.');
    }
    UserService.apply(user).then( (res) => {
      Flash.create('success', 'Application Recieved. We will be in touch! Thanks!');
    });
  }

};

HomeController.$inject = ['UserService', '$state', 'Flash'];

export default HomeController;
