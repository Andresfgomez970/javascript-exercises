const caesar = function(message, shift) {
    let messageLength = message.length
    let newMessage = "";
    
    for (let i = 0; i < messageLength; i++){
        newMessage += String.fromCharCode(message.charCodeAt(i) + shift);
    }

    return newMessage;
};

// Do not edit below this line
module.exports = caesar;

caesar("A", 1);