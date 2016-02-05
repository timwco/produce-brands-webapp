let ItemEditController = function(SearchService, $stateParams, UserService, $state, EditService) {

  let vm = this;

  vm.item = {};
  vm.updateItem = updateItem;

  activate();

  function activate () {

    vm.adminUser = UserService.isAdmin();

    if (!vm.adminUser) {
      return $state.go('root.item', { type: $stateParams.type, id: $stateParams.id });
    }

    SearchService.getSingle($stateParams.type, $stateParams.id).then ( (res) => {
      vm.item = res.data.item;
    });

  }

  function updateItem (item, type) {

    console.log(type);
    console.log(item);
    console.log(vm.item);

    EditService.updateItem(item, type, vm.item.id)
    .then ( (res) => {
      console.log(res);
    });

  }

};

ItemEditController.$inject = ['SearchService', '$stateParams', 'UserService', '$state', 'EditService'];
export default ItemEditController;
