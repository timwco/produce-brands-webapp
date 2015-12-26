let UserService = function($http) {

  let url = 'http://localhost:3000/users';
  
  // Login
  this.login = (user) => {
    return $http.post(url, user);
  };

  // Register
  this.register = (user) => {
    return $http.post(url, user);
  };

};

UserService.$inject = ['$http'];
export default UserService;