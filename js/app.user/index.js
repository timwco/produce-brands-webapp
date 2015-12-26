import angular from 'angular';
import 'angular-cookies';

import UserService from './services/user.service';

import AuthController from './controllers/auth.controller';

angular
  .module('app.user', ['ngCookies'])
  .service('UserService', UserService)
  .controller('AuthController', AuthController)
;