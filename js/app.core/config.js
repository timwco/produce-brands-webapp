let config = function($stateProvider, $urlRouterProvider) {
  
  $stateProvider

    // Layout & Home States
    .state('root', {
      abstract: true,
      templateUrl: 'templates/app-layout/layout.tpl.html',
      controller: 'LayoutController as vm'
    })
    .state('root.landing', {
      url: '/',
      templateUrl: 'templates/app-layout/start.tpl.html',
      controller: 'HomeController as vm'
    })
    .state('root.start', {
      url: '/start',
      templateUrl: 'templates/app-layout/home.tpl.html',
      controller: 'HomeController as vm'
    })

    // User States
    .state('root.login', {
      url: '/login?c',
      templateUrl: 'templates/app-user/login.tpl.html',
      controller: 'AuthController as vm'
    })
    .state('root.register', {
      url: '/register',
      templateUrl: 'templates/app-user/register.tpl.html',
      controller: 'AuthController as vm'
    })

    // Search & Listing States
    .state('root.all', {
      url: '/all/:type?page',
      templateUrl: function (params) {
        return 'templates/app-search/listings/' + params.type + '.tpl.html';
      },
      controller: 'ListingController as vm'
    })
    .state('root.search', {
      url: '/search?q',
      templateUrl: 'templates/app-search/search.tpl.html',
      controller: 'SearchController as vm'
    })
    .state('root.item', {
      url: '/:type/:id',
      templateUrl: function (params) {
        return 'templates/app-search/types/single-' + params.type + '.tpl.html';
      },
      controller: 'ItemController as vm'
    })
  
  ; // End $stateProvider


  $urlRouterProvider.otherwise('/');
  

};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;