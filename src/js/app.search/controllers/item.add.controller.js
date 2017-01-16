import _ from 'lodash';

function ItemAddController ($stateParams, SearchService, AddService) {

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
    console.log('Adding: ' + type);

    AddService.addItem(formData, type).then( res => {
      console.log(res);
    });
  }

}

ItemAddController.$inject = ['$stateParams', 'SearchService', 'AddService'];
export default ItemAddController;