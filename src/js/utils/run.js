let run = function($rootScope, UserService, Flash) {


  $rootScope.$on('$viewContentLoaded', function (event) {
    // When content loads, run the Foundation Object
    $(document).foundation();

    // Check Login - Update Nav Bar
    UserService.checkAuth();

    // Dismiss Flash Message Still visible
    let $flash = document.querySelector('.alert');
    if ($flash) { Flash.dismiss(); }

  });

};

run.$inject = ['$rootScope', 'UserService', 'Flash'];
export default run;
