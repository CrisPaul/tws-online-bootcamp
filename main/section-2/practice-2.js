'use strict';

module.exports = function countSameElements(collection) {
   var resCollection = new Array();
   var symbol = /\[|\]|:|-/;
   collection.forEach(function(elem){
       for(var i=0;  i<resCollection.length; i++){
          if(elem.replace(symbol,',').split(',')[0] == resCollection[i].key){
              resCollection[i].count += elem.replace(symbol,",").split(",")[1]?parseInt(elem.replace(symbol,',').split(',')[1]):1;
              return;
          }
       }
       resCollection[resCollection.length] = {
           key: elem.replace(symbol,",").split(",")[0],
           count: elem.replace(symbol,",").split(",")[1]?parseInt(elem.replace(symbol,",").split(",")[1]):1
       }
   })
   
  return resCollection;
}
