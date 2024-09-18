const reverseString = function(word) {
    wordLength = word.length-1
    drow = ''
    for (let i = wordLength; i >= 0; i--) {
        drow += word[i]
    }
    return drow
};

// Do not edit below this line
module.exports = reverseString;
