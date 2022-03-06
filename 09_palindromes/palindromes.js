const palindromes = function (string) {
    let stringLength = string.length;
    let palindrome = true;
    let i = 0; 

    let forwardIndex = 0;
    let backwardIndex = stringLength - 1; 

    string = string.toLowerCase(); // to work with upper and lower case

    while (palindrome &&  forwardIndex < backwardIndex){
        while (isSpecialChar(string[forwardIndex]) && forwardIndex < stringLength){
            forwardIndex += 1;
        }
        
        while (isSpecialChar(string[backwardIndex])  && backwardIndex > 0){
            backwardIndex -= 1;
        }

        palindrome = palindrome && (string[forwardIndex] == string[backwardIndex]);

        forwardIndex++;
        backwardIndex--;
    }

    return palindrome;
};

function isSpecialChar(a){
    return a == "." || a == "," || a == "!" || a == "?" || a == " "
}


// Do not edit below this line
module.exports = palindromes;

