import angular from 'angular';
import 'angular-ui-router';
import config from './config';


angular
  .module('app.core', ['ui.router'])
  .config(config)
;