let SearchController = function(SearchService, $timeout) {
  
  let vm = this;

  vm.search = search;
  vm.results = [];
  vm.noresults = false;
  vm.searching = false;
  vm.count = 0;

  function search (query) {
    SearchService.search(query).then( (res) => {
      console.log(res);
      showSearch();
      $timeout( function () {
        vm.searching = false;
        if (res.data.length > 0) {
          vm.noresults = false;
          vm.results = res.data;
          vm.count = res.data.length;
        } else {
          vm.noresults = true;
        }
      }, 1500);
    });
  }

  function showSearch () {
    vm.searching = true;
    vm.noresults = false;
    vm.count = 0;
    vm.results = [];
  }

};

SearchController.$inject = ['SearchService', '$timeout'];
export default SearchController;