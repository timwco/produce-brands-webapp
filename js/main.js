import angular from 'angular';

// Import jQuery & Foundaiton & Moment
import $ from 'jquery';
import 'foundation';
import moment from 'moment';

// Custom Modules
import './app.core/index';
import './app.layout/index';
import './app.search/index';
import './app.user/index';

// Main Run Block
import run from './utils/run.js';

// Import APP Constants
import APP from './utils/url.constant';

// Set up a run block on an angular module to help with
// loading foundation after templates load
angular
  .module('app', ['app.core', 'app.layout', 'app.search', 'app.user'])
  .run(run)
  .constant('APP', APP)
  .filter('underscoreCap', function () {
    return function (input) {
      return input.replace(/_/g, ' ').toUpperCase();
    };
  })
  .filter('moment', function () {
    return function (input) {
      return moment(input).format('MM-DD-YYYY');
    };
  })
;