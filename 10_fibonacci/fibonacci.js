const fibonacci = function(numberOfTerms) {
    if (typeof numberOfTerms == typeof "string")
        numberOfTerms = Number(numberOfTerms)

    if (numberOfTerms < 1){
        console.log("Enter a valid number in the series");
        return "OOPS"
    }

    if (numberOfTerms == 1)
        return 1;
    
    pairOfTerms = [1, 1]
    let newTerm = 0;

    for (let i = 2; i < numberOfTerms; i++){
        newTerm = sum(pairOfTerms);
        pairOfTerms[0] = pairOfTerms[1];
        pairOfTerms[1] = newTerm;
    }

    return pairOfTerms[1];
};

const sum = function(array) {
    return array.reduce((sum, element) => sum + element, 0)
};
  
// Do not edit below this line
module.exports = fibonacci;

