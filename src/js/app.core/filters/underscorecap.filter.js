let underscoreCap = function() {
  
  return function (input) {
    return input.replace(/_/g, ' ').toUpperCase();
  };

};

underscoreCap.$inject = [];
export default underscoreCap;