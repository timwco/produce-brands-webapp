import angular from 'angular';
import 'angular-ui-router';
import 'angular-flash-alert';
import config from './config';

import MessageService from './services/message.service';


angular
  .module('app.core', ['ui.router', 'flash'])
  .config(config)
  .service('MessageService', MessageService)
;