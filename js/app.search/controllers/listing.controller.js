let ListingController = function(SearchService, $stateParams) {
  
  let vm = this;
  vm.items = [];

  activate();

  function activate () {
    // Check for Fetch Page Data
    let type = $stateParams.type;
    SearchService.getListing(type).then( (res) => {
      vm.items = res.data;
    });
  }

};

ListingController.$inject = ['SearchService', '$stateParams'];
export default ListingController;