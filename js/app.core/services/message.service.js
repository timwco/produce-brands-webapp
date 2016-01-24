let MessageService = function(Flash) {
  
  this.checkCode = (num) => {
    let msgObj = {};

    switch (Number(num)) {
      case 1:
        msgObj = { text: 'You need to login or register first.', type: 'warning'} ;
      break;
      case 2:
        msgObj = { text: 'You have been successfully logged out. Thanks!', type: 'success'};
      break;
      case 3:
        msgObj = { text: 'Your account has been updated.', type: 'success'};
      break;
    }

    if (Object.keys(msgObj).length > 0) {
      Flash.create(msgObj.type, msgObj.text);
    }
  };

};

MessageService.$inject = ['Flash'];
export default MessageService;