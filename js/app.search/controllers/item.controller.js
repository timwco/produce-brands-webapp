import _ from 'underscore';

let ItemController = function(SearchService, $stateParams, UserService) {

  let vm = this;

  vm.item = {};
  vm.producer = {};
  vm.commodities = [];
  vm.brands = [];

  activate();

  function activate () {

    vm.adminUser = UserService.isAdmin();

    SearchService.getSingle($stateParams.type, $stateParams.id).then ( (res) => {
      vm.item = res.data.item;
      vm.authed = res.data.is_authed;
      // Extra fields
      if (res.data.producer) { vm.producer = res.data.producer; }
      if (res.data.commodities) {
        let commodities = _.sortBy(res.data.commodities, 'name');
        vm.commodities = _.uniq(commodities, (c) => { return c.name; });
      }
      if (res.data.brands) { vm.brands = _.sortBy(res.data.brands, 'name'); }
      if (res.data.nutrition) { vm.nutrition = JSON.parse(res.data.nutrition.data); }
    });
  }

};

ItemController.$inject = ['SearchService', '$stateParams', 'UserService'];
export default ItemController;
