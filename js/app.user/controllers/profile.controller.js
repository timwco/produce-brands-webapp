import gravatar from 'gravatar';

let ProfileController = function(UserService) {
  
  let vm = this;
  vm.updateEmail = updateEmail;

  activate();

  function activate () {
    let user = UserService.currentUser();
    vm.user = user;
    console.log(user);
    // vm.profilePic = gravatar.url(user.email, {s: '300', r: 'pg', d: '404'});
    vm.profilePic = gravatar.url('freedom@producebrands.com', {s: '300', r: 'pg', d: 'mm'});
  }

  function updateEmail (email) {
    UserService.updateEmail(email).then( (res) => {
      console.log(res);
    });
  }

};

ProfileController.$inject = ['UserService'];
export default ProfileController;