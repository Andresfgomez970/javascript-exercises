const reverseString = function(string) {
    let resultString = "";
    for (let i = string.length; i > 0; i--)
        resultString += string[i -1]


    return resultString;
};

// Do not edit below this line
module.exports = reverseString;
