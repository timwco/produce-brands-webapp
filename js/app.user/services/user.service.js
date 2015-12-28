let UserService = function($http, $cookies, $state, $rootScope) {

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

  // Expose User
  this.currentUser = () => {
    return $cookies.getObject('produce-user');
  };

  // Check Login
  this.checkAuth = () => {
    let user = $cookies.getObject('produce-user');
    if (!user) {  
      // Logic needs to be better
      if (!$state.is('root.register') && !$state.is('root.login')) {
        return $state.go('root.login', { c: 1 });
      }
    }
    $rootScope.$broadcast('user:updated', user);
  };

  // Logout
  this.logout = () => {
    $cookies.remove('produce-user');
    $state.go('root.login', { c: 2 });
  };

};

UserService.$inject = ['$http', '$cookies', '$state', '$rootScope'];
export default UserService;