let config = function($stateProvider, $urlRouterProvider) {
  
  $stateProvider

    // Layout & Home States
    .state('root', {
      abstract: true,
      templateUrl: 'templates/app-layout/layout.tpl.html',
      controller: 'LayoutController as vm'
    })
    .state('root.home', {
      url: '/',
      templateUrl: 'templates/app-layout/home.tpl.html',
      controller: 'HomeController as vm'
    })

    // User States
    .state('root.login', {
      url: '/login',
      templateUrl: 'templates/app-user/login.tpl.html',
      controller: 'AuthController as vm'
    })
    .state('root.register', {
      url: '/register',
      templateUrl: 'templates/app-user/register.tpl.html',
      controller: 'AuthController as vm'
    })
  
  ; // End $stateProvider


  $urlRouterProvider.otherwise('/');
  

};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;