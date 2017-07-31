'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  var Collection=[];
  var resCollection = [];
  var symbol = /\[|\]|\:|\-/;
  function getNumOfSameElem(collectionA){
      collectionA.forEach(function(elem){
        for(var i=0; i<resCollection.length; i++){
            if(resCollection[i].key == elem.replace(symbol,',').split(',')[0]){
                resCollection[i].count += elem.replace(symbol,',').split(',')[1]? parseInt(elem.replace(symbol,',').split(',')[1]):1;
                return;
            }   
        }
        resCollection[resCollection.length]={
            key: elem.replace(symbol,',').split(',')[0],
            count: elem.replace(symbol,',').split(',')[1]? parseInt(elem.replace(symbol,',').split(',')[1]):1
        };   
     })
  }
  getNumOfSameElem(collectionA);
  for(var i=0;i<resCollection.length;i++){
      var size;
      if(objectB['value'].indexOf(resCollection[i].key) >= 0){
          if(size = parseInt((resCollection[i].count)/3)){
                Collection.push({
                  key:  resCollection[i].key,
                  count:    resCollection[i].count - size
            });
          }
      }else{
              Collection.push({
                  key:  resCollection[i].key,
                  count:    resCollection[i].count
              })
      }
  }
  return Collection;
}
