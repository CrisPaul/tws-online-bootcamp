'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  var resCollection = new Array();
  var size;
  for(var i=0; i<collectionA.length; i++){
      if(objectB['value'].indexOf(collectionA[i].key) >= 0){
          size = parseInt((collectionA[i].count)/3);
          if(size!=0){
              resCollection.push({
                key:    collectionA[i].key, count:  collectionA[i].count - size
              });
          }
      }else{
            resCollection.push({
                  key:  collectionA[i].key,  count:   collectionA[i].count
            });
      }
  }
  return resCollection;
  
}
