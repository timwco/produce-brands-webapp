import _ from 'underscore';

let ItemEditController = function(SearchService, $stateParams, UserService, $state, EditService, Flash) {

  let vm = this;
  let tempObj = {};

  vm.item = {};
  vm.updateItem = updateItem;


  activate();

  function activate () {

    Flash.create('success', 'yayyayaya');

    vm.adminUser = UserService.isAdmin();

    if (!vm.adminUser) {
      return $state.go('root.item', { type: $stateParams.type, id: $stateParams.id });
    }

    SearchService.getSingle($stateParams.type, $stateParams.id).then ( (res) => {
      vm.item = res.data.item;
      tempObj = _.clone(res.data.item);
    });

  }

  function updateItem (item, type) {

    let merged = _.omit(item, function(v,k) { return tempObj[k] === v; });

    EditService.updateItem(merged, type, vm.item.id)
    .then ( (res) => {
      Flash.create('success', 'Item has been updated.');
    });

  }

};

ItemEditController.$inject = ['SearchService', '$stateParams', 'UserService', '$state', 'EditService', 'Flash'];
export default ItemEditController;
