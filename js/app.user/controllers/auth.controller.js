let AuthController = function(UserService, Flash, $stateParams, MessageService, $state, $timeout) {
  
  let vm = this;

  vm.login = login;
  vm.register = register;

  activate();

  function activate () {

    // First Check for user authed, then route away
    let user = UserService.currentUser();
    if (user) { $state.go('root.start'); }

    // Second Check for Auth Message
    if ($stateParams.c) {
      let msg = MessageService.code($stateParams.c);
      Flash.create('warning', msg);
    }
  }

  function login (user) {
    UserService.login(user)
    .then( (res) => {
      Flash.create('success', 'Thanks! Logging you in now...');
      $timeout( () => { authSuccess(res.data); }, 2000);
    }, (res) => {
      Flash.create('danger', res.data.errors);
      Flash.pause();
    });
  }

  function register (user) {
    UserService.register(user)
    .then( (res) => {
      Flash.create('success', 'Thanks! Logging you in now...');
      $timeout( () => { authSuccess(res.data); }, 2000);
    }, (res) => {
      let msg = res.data.errors.join(", ");
      Flash.create('danger', msg);
      Flash.pause();
    });
  }

  function authSuccess (user) {
    UserService.store(user);
    $state.go('root.start');
  }

};

AuthController.$inject = ['UserService', 'Flash', '$stateParams', 'MessageService', '$state', '$timeout'];

export default AuthController;
