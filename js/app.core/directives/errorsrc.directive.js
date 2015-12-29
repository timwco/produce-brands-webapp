let ErrorSrcDirective = function() {
  
  return {
    link: function(scope, element, attrs) {
      element.bind('error', function() {
        attrs.$set('src', 'images/notfound.jpg');
      });
    }
  };

};

ErrorSrcDirective.$inject = [];
export default ErrorSrcDirective;