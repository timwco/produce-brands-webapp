let ItemController = function(SearchService, $stateParams) {
  
  let vm = this;

  vm.item = {};

  activate();

  function activate () {
    SearchService.getSingle($stateParams.type, $stateParams.id).then ( (res) => {
      vm.item = res.data;
    });
  }

  

};

ItemController.$inject = ['SearchService', '$stateParams'];
export default ItemController;