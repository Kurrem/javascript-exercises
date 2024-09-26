const palindromes = function (word) {
    word = word.replace(/[^a-zA-Z0-9 ]/g, "").toLowerCase().replace(/ /g,'')
    splitWord = word.split("")
    reversedWord = word.split("").reverse()

    return splitWord.every((element, index) => element === reversedWord[index])
};

// Do not edit below this line
module.exports = palindromes;
