const caesar = function(message, shift) {
    let messageLength = message.length;
    let newMessage = "";
    let newCharNumber;
    let newChar;
    let charCode;
    let abc_length;

    let minimumChar1 = "a".charCodeAt(0);
    let minimumChar2 = "A".charCodeAt(0);

    abc_length = "z".charCodeAt(0) - "a".charCodeAt(0) + 1;

    for (let i = 0; i < messageLength; i++){
        charCode = message.charCodeAt(i);
        if (shiftChar(charCode, minimumChar1, abc_length, shift)[0]){
            newMessage += shiftChar(charCode, minimumChar1, abc_length, shift)[1];
        }
        else if (shiftChar(charCode, minimumChar2, abc_length, shift)[0]){
            newMessage += shiftChar(charCode, minimumChar2, abc_length, shift)[1];
        }
        else{
            newMessage += message[i]
        }
    }
    
    return newMessage;
};


function shiftChar(charCode, minimumChar, abc_length, shift){
    let shiftModule;
    if (charCode >= minimumChar && charCode <= (minimumChar + abc_length)){
        shiftModule = ((charCode - minimumChar) + shift) % abc_length;

        if (shiftModule >= 0)
            newCharNumber = minimumChar + shiftModule;
        else
            newCharNumber = minimumChar + (abc_length + shiftModule);
        
        newChar = String.fromCharCode(newCharNumber);
        return [1, newChar];
    }
    else{
        return 0;
    }
}

// Do not edit below this line
module.exports = caesar;

console.log(caesar('Te amo mucho amor', -5));