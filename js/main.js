import angular from 'angular';

// Import jQuery & Foundaiton
import $ from 'jquery';
import 'foundation';

// Custom Modules
import './app.core/index';
import './app.layout/index';
import './app.search/index';

// Set up a run block on an angular module to help with
// loading foundation after templates load
angular
  .module('app', ['app.core', 'app.layout', 'app.search'])
  .run( function ($rootScope) {

    $rootScope.$on('$viewContentLoaded', function (event, data) {
      $(document).foundation();
    });
  })
;