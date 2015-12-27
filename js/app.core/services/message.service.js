let MessageService = function() {
  
  this.code = (num) => {
    let msg = '';
    switch (Number(num)) {
      case 1:
        msg = 'Sorry, you need to login or register first.';
      break;
    }

    return msg;

  };

};

MessageService.$inject = [];
export default MessageService;