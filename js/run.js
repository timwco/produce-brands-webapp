let run = function($rootScope, UserService) {
  
  // When content loads, run the Foundation Object
  $rootScope.$on('$viewContentLoaded', function (event, data) {
    $(document).foundation();
  });

  // When a route changes, check login
  $rootScope.$on('$stateChangeSuccess', function (event, data) {
    UserService.checkAuth(data.name);
  }); 

};

run.$inject = ['$rootScope', 'UserService'];
export default run;