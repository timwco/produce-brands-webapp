let UserService = function($http, $cookies, $state, $rootScope, APP) {

  // Apply
  this.apply = (user) => {
    return $http.post(APP.URL + 'apply', user);
  };

  // Login
  this.login = (user) => {
    return $http.post(APP.URL + 'users', user);
  };

  // Register
  this.register = (user) => {
    return $http.post(APP.URL + 'users/new', user);
  };

  // Store User
  this.store = (user) => {
    $cookies.putObject('produce-user', user);
  };

  // Check for Admin
  this.isAdmin = () => {
    let user = this.currentUser();
    return (user && user.is_admin) ? true : false;
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
      // if (!$state.is('root.register') && !$state.is('root.login') && !$state.is('root.landing') && !$state.is('root.apply')) {
      //   return $state.go('root.landing');
      // }
    } else {
      $rootScope.$broadcast('user:updated', user);
      APP.CONFIG.headers['X-AUTH-TOKEN'] = user.auth_token;
    }
  };

  // Logout
  this.logout = () => {
    $cookies.remove('produce-user');
    $rootScope.$broadcast('user:updated', null);
    $state.go('root.login', { c: 2 });
  };

  // Update Email
  this.updateUser = (obj) => {
    return $http.put(APP.URL + 'users', obj, APP.CONFIG);
  };

};

UserService.$inject = ['$http', '$cookies', '$state', '$rootScope', 'APP'];
export default UserService;
