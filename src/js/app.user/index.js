import angular from 'angular';
import 'angular-cookies';

import UserService from './services/user.service';

import AuthController from './controllers/auth.controller';
import ProfileController from './controllers/profile.controller';

angular
  .module('app.user', ['ngCookies'])
  .service('UserService', UserService)
  .controller('AuthController', AuthController)
  .controller('ProfileController', ProfileController)
;