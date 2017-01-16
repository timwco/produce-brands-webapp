import _ from 'lodash';

function ItemAddController ($stateParams, SearchService, AddService, $state) {

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

    // Get our Attachment
    let attachment = document.getElementById('attachmentInput').files[0];
    let formData   = new FormData();

    // Append all data to our form data object
    formData.append('attachment', attachment);

    _.forIn(item, (value, key) => {
      formData.append(key, value);
    });

    // Send data to server
    AddService.addItem(formData, type).then( res => {
      alert("New Item Added!!");
      $state.go('root.item', { type: type, id: res.data.item.id });
    });
  }

}

ItemAddController.$inject = ['$stateParams', 'SearchService', 'AddService', '$state'];
export default ItemAddController;