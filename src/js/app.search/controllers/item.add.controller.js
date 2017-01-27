import _ from 'lodash';

function ItemAddController ($stateParams, SearchService, AddService, $state) {

  let vm = this;

  vm.addItem = addItem;

  vm.selectedCommodities = [];
  vm.checkCommodity = checkCommodity;

  activate();

  function activate () {
    let needs = ($stateParams.type === 'brand') ? 'producer' : 'brand';
    if ($stateParams.type === 'brand') {
      SearchService.getAll('brand').then( res => {
        vm.items = res.data.items;
      });
      SearchService.getAll('commodity').then( res => {
        vm.commodities = res.data.items;
      })
    }
  }

  function checkCommodity (commodity_id) {
    let idLoc = vm.selectedCommodities.indexOf(commodity_id);

    if (idLoc > -1) {
      vm.selectedCommodities.splice(idLoc, 1);
    } else {
      vm.selectedCommodities.push(commodity_id);
    }
  } 

  function addItem (item, type) {

    // Get our Attachment
    let attachment = document.getElementById('attachmentInput').files[0];
    let formData   = new FormData();

    // Append all data to our form data object
    formData.append('attachment', attachment);

    _.forIn(item, (value, key) => {
      formData.append(key, value);
    });

    // If Brand & commodities, append commodities
    if (type === 'brand' && vm.selectedCommodities.length > 0) {
      formData.append('commodities', vm.selectedCommodities);
    }

    // Send data to server
    AddService.addItem(formData, type).then( res => {
      alert("New Item Added!!");
      $state.go('root.item', { type: type, id: res.data.item.id });
    });
  }

}

ItemAddController.$inject = ['$stateParams', 'SearchService', 'AddService', '$state'];
export default ItemAddController;