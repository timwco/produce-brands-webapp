let run = function($rootScope, UserService) {
  
  
  $rootScope.$on('$viewContentLoaded', function (event) {
    // When content loads, run the Foundation Object
    $(document).foundation();

    // Check Login - Update Nav Bar
    let user = UserService.checkAuth();
    if (user) { $rootScope.$broadcast('user:updated', user); }
  });

};

run.$inject = ['$rootScope', 'UserService'];
export default run;