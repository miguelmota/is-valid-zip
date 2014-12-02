(function(){

  function isValidZip(v) {
    if (!v) return false;
    var re = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
    return re.test(v);
  }

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = isValidZip;
  } else {
    window.isValidZip = isValidZip;
  }

})();
