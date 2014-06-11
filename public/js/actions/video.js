/*jshint eqnull:true, laxcomma:true, undef:true, indent:2, camelcase:false, browser:true, jquery:true, devel:true */
/*global define:true */


define(['constants'], function (constants) {
  
  return {
    addTag: function(tag) {
      this.dispatch(constants.ADD_TAG, {tag: tag});
    }, 

    removeTag: function(tag) {
      this.dispatch(constants.REMOVE_TAG, {tag: tag});
    }, 


  };
  
});