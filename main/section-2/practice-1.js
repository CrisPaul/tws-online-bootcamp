'use strict';

module.exports = function countSameElements(collection) {
  var resCollection = new Array();
  collection.map(function(elem){
      for(var i=0;i<resCollection.length;i++){
          if(elem == resCollection[i].key){
              resCollection[i].count += 1;
              return ;
          }
      }
       resCollection[resCollection.length] = {
          key: elem,count: 1
      }
  })
  return resCollection;
}
