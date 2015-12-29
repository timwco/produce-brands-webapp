import angular from 'angular';
import 'angular-ui-router';
import 'angular-flash-alert';
import config from './config';

// Services
import MessageService from './services/message.service';

// Filters
import UnderscoreCapFilter from './filters/underscorecap.filter';
import MomentFilter from './filters/moment.filter';

// Import Constants
import APP from './constants/app.constant';

// Directives
import ErrorSrcDirective from './directives/errorsrc.directive';

angular
  .module('app.core', ['ui.router', 'flash'])
  .config(config)
  .constant('APP', APP)
  .service('MessageService', MessageService)
  .filter('moment', MomentFilter)
  .filter('underscoreCap', UnderscoreCapFilter)
  .directive('errSrc', ErrorSrcDirective)
;