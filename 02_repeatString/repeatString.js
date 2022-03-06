const repeatString = function(string, n_times) {
    let finalString = "";

    if (n_times < 0)
        return "ERROR"

    for (let i = 0; i < n_times; i++){
        finalString += string
    }

    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
