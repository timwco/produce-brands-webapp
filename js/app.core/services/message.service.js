let MessageService = function() {
  
  this.code = (num) => {
    let msg = '';
    switch (Number(num)) {
      case 1:
        msg = 'You need to login or register first.';
      break;
      case 2:
        msg = 'You have been successfully logged out. Thanks!';
      break;
    }

    return msg;

  };

};

MessageService.$inject = [];
export default MessageService;