'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    var resCollection = new Array();
    for(var i=0; i<collectionA.length; i++){
        if(objectB['value'].indexOf(collectionA[i].key) >= 0){
            resCollection.push({
                key:    collectionA[i].key,
                count:  collectionA[i].count-1
            }); 
        }else{
             resCollection.push({
                key:    collectionA[i].key,
                count:  collectionA[i].count
            }); 
        }
    }
    return resCollection;
}
