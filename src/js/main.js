import angular from 'angular';

// Custom Modules
import './app.core/index';
import './app.layout/index';
import './app.search/index';
import './app.user/index';

// Main Run Block
import run from './utils/run.js';

// Set up a run block on an angular module to help with
// loading foundation after templates load
angular
  .module('app', ['app.core', 'app.layout', 'app.search', 'app.user'])
  .run(run)
;