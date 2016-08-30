let run = function($rootScope, UserService, Flash) {


  $rootScope.$on('$viewContentLoaded', function (event) {

    // Check Login - Update Nav Bar
    UserService.checkAuth();

    // Dismiss Flash Message Still visible
    let $flash = document.querySelector('.alert');
    if ($flash) { Flash.dismiss(); }

  });

};

run.$inject = ['$rootScope', 'UserService', 'Flash'];
export default run;
