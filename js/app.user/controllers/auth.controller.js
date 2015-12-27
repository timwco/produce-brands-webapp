let AuthController = function(UserService, Flash, $stateParams, MessageService) {
  
  let vm = this;

  vm.login = login;
  vm.register = register;

  checkMessage();

  function checkMessage () {
    if ($stateParams.c) {
      let msg = MessageService.code($stateParams.c);
      Flash.create('warning', msg);
    }
  }


  function login (user) {
    UserService.login(user).then( (res) => {
      UserService.store(res.data);
    });
  }

  function register (user) {
    UserService.register(user).then( (res) => {
      UserService.store(res.data);
    });
  }

};

AuthController.$inject = ['UserService', 'Flash', '$stateParams', 'MessageService'];

export default AuthController;