let HomeController = function(UserService, $state) {
  
  let vm = this;

  activate();

  function activate () {
    let user = UserService.currentUser();
    if (user) { $state.go('root.start'); }
  }

};

HomeController.$inject = ['UserService', '$state'];

export default HomeController;