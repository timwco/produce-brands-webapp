import _ from 'underscore';

let ItemController = function(SearchService, $stateParams) {
  
  let vm = this;

  vm.item = {};
  vm.producer = {};
  vm.commodities = [];
  vm.brands = [];

  activate();

  function activate () {
    SearchService.getSingle($stateParams.type, $stateParams.id).then ( (res) => {
      console.log(res);
      vm.item = res.data.item;
      // Extra fields
      if (res.data.producer) { vm.producer = res.data.producer; }
      if (res.data.commodities) { 
        vm.commodities = _.uniq(res.data.commodities, (c) => { return c.name; });
      }
      if (res.data.brands) { vm.brands = res.data.brands; }
      if (res.data.nutrition) { vm.nutrition = JSON.parse(res.data.nutrition.data); }
    });
  }
  
};

ItemController.$inject = ['SearchService', '$stateParams'];
export default ItemController;