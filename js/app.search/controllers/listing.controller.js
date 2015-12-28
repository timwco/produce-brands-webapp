let ListingController = function(SearchService, $stateParams) {
  
  let vm = this;

  activate();

  function activate () {
    // Check for Fetch Page Data
    let type = $stateParams.type;
    SearchService.getListing(type);
  }

};

ListingController.$inject = ['SearchService', '$stateParams'];
export default ListingController;