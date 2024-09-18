const removeFromArray = function(inputArray) { 

    filteredArray = inputArray
    for (let i = 1; i < arguments.length; i++) {
        filteredArray = filteredArray.filter((element) => {
            if (element === arguments[i]) {
                return false
            } else return true
        })
    }

    return filteredArray
};

// Do not edit below this line
module.exports = removeFromArray;
