const removeFromArray = function(array, ...remove) {
    returnArray = []
    arrayLength = array.length;
    for (let i = 0; i < arrayLength; i++){        
        removeLength = remove.length
        for (let j = 0; j < removeLength; j++){
            if (array[i] === remove[j]){
                delete array[i];
                break;
            }
        }
    }

    for (let i = 0; i < arrayLength; i++)        
        array[i] && returnArray.push(array[i]);    

    return returnArray;
};

// Do not edit below this line
module.exports = removeFromArray;