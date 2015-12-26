import angular from 'angular';

import UserService from './services/user.service';

import LoginController from './controllers/login.controller';
import RegisterController from './controllers/register.controller';

angular
  .module('app.user', [])
  .service('UserService', UserService)
  .controller('LoginController', LoginController)
  .controller('RegisterController', RegisterController)
;