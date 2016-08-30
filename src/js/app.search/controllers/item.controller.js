import _ from 'underscore';

let ItemController = function(SearchService, $stateParams, UserService) {

  let vm = this;

  vm.item = {};
  vm.producer = {};
  vm.commodities = [];
  vm.brands = [];
  vm.authed = true;

  activate();

  function activate () {

    vm.adminUser = UserService.isAdmin();

    SearchService.getSingle($stateParams.type, $stateParams.id).then ( (res) => {
      vm.item = res.data.item;
      vm.authed = res.data.is_authed;

      shareLinks(res.data.item);

      // Extra fields
      if (res.data.producer) { vm.producer = res.data.producer; }
      if (res.data.commodities) {
        let commodities = _.sortBy(res.data.commodities, 'name');
        vm.commodities = _.uniq(commodities, (c) => { return c.name; });
      }
      if (res.data.brands) { vm.brands = _.sortBy(res.data.brands, 'name'); }
      if (res.data.nutrition) { vm.nutrition = JSON.parse(res.data.nutrition.data); }
    });
  }

  function shareLinks (item) {

    let titleEncode = encodeURIComponent(item.name + " : Produce Brands");
    let urlEncode = encodeURIComponent("https://db.producebrands.com/" + $stateParams.type + "/" + $stateParams.id);

    vm.share_facebook = "https://www.facebook.com/sharer/sharer.php?u=" + urlEncode + "&t=" + titleEncode;
    vm.share_twitter = "https://twitter.com/intent/tweet?source=" + urlEncode + "%2F&text=" + titleEncode + ":%20" + urlEncode + "%2F&via=producebrands";
    vm.share_pinterest = "http://pinterest.com/pin/create/button/?url=" + urlEncode + "%2F&description=" + titleEncode;
    vm.share_linkedin = "http://www.linkedin.com/shareArticle?mini=true&url=" + urlEncode + "%2F&title=" + titleEncode + "&summary=&source=" + urlEncode + "%2F";


  }

};

ItemController.$inject = ['SearchService', '$stateParams', 'UserService'];
export default ItemController;
