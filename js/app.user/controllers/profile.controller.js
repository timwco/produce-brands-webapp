import gravatar from 'gravatar';

let ProfileController = function(UserService, Flash, $state, MessageService, $stateParams) {
  
  let vm = this;
  vm.updateEmail = updateEmail;
  vm.updatePassword = updatePassword;

  activate();

  function activate () {
    // Check for messages
    MessageService.checkCode($stateParams.c);

    // Get User info
    let user = UserService.currentUser();
    vm.user = user;
    vm.profilePic = gravatar.url(user.email, {s: '300', r: 'pg', d: 'mm'});
  }

  function updateEmail (email) {
    UserService.updateUser({email: email})
    .then( (res) => {
      UserService.store(res.data);
      $state.go($state.current, { c: 3 }, {reload: true});
    }, (res) => {
      let msg = res.data.errors.join(", ");
      Flash.create('danger', msg);
      Flash.pause();
    });
  }

  function updatePassword (password, password2) {
    if (password !== password2) {
      return Flash.create('danger', 'Sorry, your passwords need to match!');
    }
    UserService.updateUser({password: password})
    .then( (res) => {
      $state.go($state.current, { c: 3 }, {reload: true});
    }, (res) => {
      let msg = res.data.errors.join(", ");
      Flash.create('danger', msg);
      Flash.pause();
    });
  }

};

ProfileController.$inject = ['UserService', 'Flash', '$state', 'MessageService', '$stateParams'];
export default ProfileController;