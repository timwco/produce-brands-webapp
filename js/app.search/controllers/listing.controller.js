let ListingController = function(SearchService, $stateParams, $timeout) {
  
  let vm = this;
  vm.items = [];
  vm.current_page = 1;
  vm.next_page = 2;
  vm.pages = 0;
  vm.entries = 0;
  vm.openImage = openImage;
  vm.loading = false;

  // Options
  vm.brandColumns = ['name', 'country', 'state', 'image', 'description', 'producer'];
  vm.producerColumns = ['name', 'city', 'state', 'social'];
  vm.commodityColumns = ['name', 'description'];

  activate();

  function activate () {
    // Show loading bar
    vm.loading = true;

    // Check for Fetch Page Data
    let type = $stateParams.type;
    let page = $stateParams.page;
    SearchService.getListing(type, page).then( (res) => {

      let next = res.data.current_page + 1;
      let prev = res.data.current_page - 1;

      vm.entries = res.data.total_entries;
      vm.pages = res.data.total_pages;
      vm.current_page = res.data.current_page;
      vm.prev_page = (prev === 0) ? null : prev;
      vm.next_page = (next > res.data.total_pages) ? null : next;
      $timeout( function () {
        vm.loading = false; // clear loading bar
        vm.items = res.data.items;
      }, 900);

    });
  }

  function openImage (id) {
    let $modal = $('#modal');
    let url = '';
    if (id) {
      url = 'images/items/' + id + '.jpg';
    } else {
      url = 'images/notfound.jpg';
    }
    $modal.html('<img src="' + url + '">').foundation('open');
  }

};

ListingController.$inject = ['SearchService', '$stateParams', '$timeout'];
export default ListingController;