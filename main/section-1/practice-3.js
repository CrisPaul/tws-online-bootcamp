'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  //return '实现练习要求，并改写该行代码。';
  var resCollection = new Array();
  for(var i=0; i<collectionA.length; i++)
  {
      for(var j=0; j<collectionB['value'].length; j++)
      {
          if(collectionA[i] == collectionB['value'][j])
          {
              resCollection.push(collectionA[i]);
          }
      }
  }
  return resCollection;
}
