function ItemAddController ($stateParams, SearchService) {

  let vm = this;

  vm.addItem = addItem;

  activate();

  function activate () {
    let needs = ($stateParams.type === 'brand') ? 'producer' : 'brand';
    SearchService.getAll(needs).then( res => {
      vm.items = res.data.items;
    });
  }

  function addItem (item, type) {
    console.log('Adding: ' + type);
    console.log(item);
  }

}

ItemAddController.$inject = ['$stateParams', 'SearchService'];
export default ItemAddController;