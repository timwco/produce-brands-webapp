let config = function($stateProvider, $urlRouterProvider) {
  
  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/app-layout/layout.tpl.html'
    })
    .state('root.home', {
      url: "/",
      templateUrl: 'templates/app-layout/home.tpl.html',
      controller: 'HomeController as vm'
    });


  $urlRouterProvider.otherwise('/');
  

};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;