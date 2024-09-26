const getTheTitles = function(objBooks) {
    arrayBooks = []
    for (let key in objBooks) {
        arrayBooks.push(objBooks[key].title)
    }
    return arrayBooks
};

// Do not edit below this line
module.exports = getTheTitles;
