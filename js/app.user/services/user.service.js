let UserService = function($http, $cookies, $state) {

  let url = 'http://localhost:3000/users';
  
  // Login
  this.login = (user) => {
    return $http.post(url, user);
  };

  // Register
  this.register = (user) => {
    return $http.post(url + '/new', user);
  };

  // Store User
  this.store = (user) => {
    $cookies.putObject('produce-user', user);
  };

  // Check Login
  this.checkAuth = (route) => {
    let user = $cookies.getObject('produce-user');
    console.log(user);

    if (route !== 'root.register' && route !== 'root.login') {
      $state.go('root.login', { c: 1 });
    }


  };

  // Logout
  this.logout = () => {
    $cookies.remove('produce-user');
  };

};

UserService.$inject = ['$http', '$cookies', '$state'];
export default UserService;