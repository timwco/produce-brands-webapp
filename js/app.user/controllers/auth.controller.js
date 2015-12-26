let AuthController = function(UserService) {
  
  let vm = this;

  vm.login = login;
  vm.register = register;


  function login (user) {
    UserService.login(user).then( (res) => {
      UserService.store(res.data);
    });
  }

  function register (user) {
    UserService.register(user).then( (res) => {
      console.log(res);
    });
  }

};

AuthController.$inject = ['UserService'];

export default AuthController;