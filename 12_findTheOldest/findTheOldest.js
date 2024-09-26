/*const findTheOldest = function(people) {
    oldest = ''
    for (let key in people) {
        birthyear = people[key]["yearOfBirth"]
        deathyear = people[key]["yearOfDeath"]
        age = deathyear - birthyear
        people[key].age = age
        if (!oldest) {
            oldest = people[key]
        }
        else if (people[key]["age"] > oldest["age"]) {
            oldest = people[key]
        }
    }

    return oldest
};*/

const getAge = function (birth, death) {
    if (!death) {
        death = new Date().getFullYear()
    }
    return death - birth
}

const findTheOldest = function(people) {
    return people.reduce((oldest, current) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath)
        const currentAge = getAge(current.yearOfBirth, current.yearOfDeath)
        return oldestAge < currentAge ? current : oldest
    })
}

// Do not edit below this line
module.exports = findTheOldest;
