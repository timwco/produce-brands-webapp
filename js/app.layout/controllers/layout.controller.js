let LayoutController = function(SearchService) {

  let vm = this;

  vm.search = search;

  function search (query) {
    SearchService.query(query).then( function (res) {
      console.log(res);
    });
  }

};
LayoutController.$inject = ['SearchService'];
export default LayoutController;