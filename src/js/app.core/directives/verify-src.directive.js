let VerifySrcDirective = function() {
  
  return {
    link: function(scope, element, attrs) {
      element.bind('error', function() {
        attrs.$set('src', 'images/notfound.jpg');
      });
    }
  };

};

VerifySrcDirective.$inject = [];
export default VerifySrcDirective;