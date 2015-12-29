let SearchController = function(SearchService) {
  
  let vm = this;

  vm.search = search;
  vm.results = [];

  function search (query) {
    SearchService.search(query).then( (res) => {
      vm.results = res.data;
    });
  }

};

SearchController.$inject = ['SearchService'];
export default SearchController;