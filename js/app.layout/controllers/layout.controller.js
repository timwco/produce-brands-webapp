let LayoutController = function(SearchService, UserService, $scope) {

  let vm = this;

  vm.search = search;
  vm.user = null;

  function search (query) {
    SearchService.query(query).then( function (res) {
      console.log(res);
    });
  }

  $scope.$on('user:updated', (event, args) => {
    console.log(args);
  });


};
LayoutController.$inject = ['SearchService', 'UserService', '$scope'];
export default LayoutController;