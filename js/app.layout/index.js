import angular from 'angular';

import HomeController from './controllers/home.controller';
import LayoutController from './controllers/layout.controller';

angular
  .module('app.layout', [])
  .controller('HomeController', HomeController)
  .controller('LayoutController', LayoutController)
;