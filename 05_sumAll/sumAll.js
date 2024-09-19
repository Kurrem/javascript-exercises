const sumAll = function() {
    /* Largest number minus smallest number result in desired step count*/
    if (typeof(arguments[0]) !== 'number' || typeof(arguments[1]) !== 'number') return 'ERROR'

    const smallNumber = Math.min(arguments[0], arguments[1])
    const bigNumber = Math.max(arguments[0], arguments[1])
    let sum = 0

    if (!Number.isInteger(smallNumber) || !Number.isInteger(bigNumber)) return 'ERROR'
    if (smallNumber < 0 || bigNumber < 0) return 'ERROR'
    if (isNaN(smallNumber) || isNaN(bigNumber)) return 'ERROR'

    for (let i = smallNumber; i <= bigNumber; i++) {
        sum += i
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
