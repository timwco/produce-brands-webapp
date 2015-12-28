let AuthController = function(UserService, Flash, $stateParams, MessageService, $state) {
  
  let vm = this;

  vm.login = login;
  vm.register = register;

  activate();

  function activate () {

    // First Check for user authed, then route away
    let user = UserService.currentUser();
    if (user) { $state.go('root.home'); }

    // Second Check for Auth Message
    if ($stateParams.c) {
      let msg = MessageService.code($stateParams.c);
      Flash.create('warning', msg);
    }
  }

  function login (user) {
    UserService.login(user).then( (res) => {
      authSuccess(res.data);
    });
  }

  function register (user) {
    UserService.register(user).then( (res) => {
      authSuccess(res.data);
    });
  }

  function authSuccess (user) {
    UserService.store(user);
    $state.go('root.home');
  }

};

AuthController.$inject = ['UserService', 'Flash', '$stateParams', 'MessageService', '$state'];

export default AuthController;