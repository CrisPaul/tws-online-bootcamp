'use strict';

module.exports = function countSameElements(collection) {
  var resCollection = new Array();
  var sym = /\[|\]|\:|\-/;      
  collection.forEach(function(elem){
      for(var i=0; i<resCollection.length; i++){
          if(resCollection[i].name == elem.replace(sym,',').split(',')[0]){
              resCollection[i].summary += elem.replace(sym,',').split(',')[1]?parseInt(elem.replace(sym,',').split(',')[1]):1;
                return ;
          }
      }
      resCollection[resCollection.length]={
          name:  elem.replace(sym,',').split(',')[0],
          summary: elem.replace(sym,',').split(',')[1]?parseInt(elem.replace(sym,',').split(',')[1]):1
      }
  })
  return resCollection;
}
