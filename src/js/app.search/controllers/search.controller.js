let SearchController = function(SearchService, $timeout, $stateParams, $state) {

  let vm = this;

  vm.search = search;
  vm.updateSearch = updateSearch;
  vm.results = [];
  vm.noresults = false;
  vm.count = 0;
  vm.query = '';

  activate();

  function activate () {

    // Check for default query
    let query = $stateParams.q;
    if (query !== ''){
      vm.query = query;
      search(query);
    }

  }

  function search (query) {
    SearchService.search(query).then( (res) => {
      showSearch();
      if (res.data.length > 0) {
        vm.noresults = false;
        vm.results = res.data;
        vm.count = res.data.length;
      } else {
        vm.noresults = true;
      }
    });
  }

  function updateSearch (query) {
    $state.go('root.search', {q: query });
  }

  function showSearch () {
    vm.noresults = false;
    vm.count = 0;
    vm.results = [];
  }

};

SearchController.$inject = ['SearchService', '$timeout', '$stateParams', '$state'];
export default SearchController;
