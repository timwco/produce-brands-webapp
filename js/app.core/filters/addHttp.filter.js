let addHTTPFilter = function() {
  
  return function (input) {
    return (!/^(f|ht)tps?:\/\//i.test(input)) ? "http://" + input : input;
  };

};

addHTTPFilter.$inject = [];
export default addHTTPFilter;