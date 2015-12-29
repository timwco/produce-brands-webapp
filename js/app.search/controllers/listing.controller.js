let ListingController = function(SearchService, $stateParams) {
  
  let vm = this;
  vm.items = [];
  vm.current_page = 1;
  vm.next_page = 2;
  vm.pages = 0;
  vm.entries = 0;

  // Options
  vm.brandColumns = ['name', 'country', 'state', 'image', 'description', 'producer'];

  activate();

  function activate () {
    // Check for Fetch Page Data
    let type = $stateParams.type;
    let page = $stateParams.page;
    console.log($stateParams);
    SearchService.getListing(type, page).then( (res) => {
      console.log(res);

      let next = res.data.current_page + 1;
      let prev = res.data.current_page - 1;

      vm.entries = res.data.total_entries;
      vm.pages = res.data.total_pages;
      vm.items = res.data.items;
      vm.current_page = res.data.current_page;
      vm.prev_page = (prev === 0) ? null : prev;
      vm.next_page = (next > res.data.total_pages) ? null : next;

    });
  }

};

ListingController.$inject = ['SearchService', '$stateParams'];
export default ListingController;