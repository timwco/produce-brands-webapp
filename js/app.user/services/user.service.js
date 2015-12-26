let UserService = function($http, $cookies) {

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
    $cookies.put('user-token', user.auth_token);
    $cookies.put('user-email', user.email);
  };

};

UserService.$inject = ['$http', '$cookies'];
export default UserService;