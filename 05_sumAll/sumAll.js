const sumAll = function(minNumber, maxNumber) {
    let sumResult = 0;
    let dummyNumber;
    if (minNumber > maxNumber){
        dummyNumber = maxNumber;
        maxNumber = minNumber;
        minNumber = dummyNumber;
    }

    if (minNumber < 0 || maxNumber < 0)
        return "ERROR";

    if ((typeof minNumber != typeof 1) || (typeof maxNumber != typeof 1) )
        return "ERROR"

    for (let i = minNumber;  i <= maxNumber; i ++)
        sumResult += i


    return sumResult;
};

// Do not edit below this line
module.exports = sumAll;
