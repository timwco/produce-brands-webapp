import angular from 'angular';

import SearchService from './services/search.service';
import EditService from './services/edit.service';

import SearchController from './controllers/search.controller';
import ItemController from './controllers/item.controller';
import ListingController from './controllers/listing.controller';
import ItemEditController from './controllers/item.edit.controller';

angular
  .module('app.search', [])
  .service('SearchService', SearchService)
  .service('EditService', EditService)
  .controller('SearchController', SearchController)
  .controller('ItemController', ItemController)
  .controller('ListingController', ListingController)
  .controller('ItemEditController', ItemEditController)
;
