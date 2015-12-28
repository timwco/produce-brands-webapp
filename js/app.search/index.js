import angular from 'angular';

import SearchService from './services/search.service';

import SearchController from './controllers/search.controller';
import ItemController from './controllers/item.controller';
import ListingController from './controllers/listing.controller';

angular
  .module('app.search', [])
  .service('SearchService', SearchService)
  .controller('SearchController', SearchController)
  .controller('ItemController', ItemController)
  .controller('ListingController', ListingController)
;