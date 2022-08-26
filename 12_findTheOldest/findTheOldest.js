const findTheOldest = function(array) {
    return array.reduce((oldest, currentPerson) => {
        const oldestAge = calculateAge(oldest.yearOfDeath, oldest.yearOfBirth);
        const currentAge = calculateAge(currentPerson.yearOfDeath, currentPerson.yearOfBirth);
        return oldestAge < currentAge ? currentPerson : oldest;
    });

    function calculateAge(death, birth) {
        if (!death) {
            death = new Date().getFullYear();
        }
        return death - birth;
    };
};

// Do not edit below this line
module.exports = findTheOldest;
