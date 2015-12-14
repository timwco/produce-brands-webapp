import angular from 'angular';

import SearchService from './services/search.service';

angular
  .module('app.search', [])
  .service('SearchService', SearchService)
;