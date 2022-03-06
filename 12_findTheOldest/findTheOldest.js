const findTheOldest = function(people) {
    let yearsOfBirth = people.map(({ yearOfBirth }) => yearOfBirth);
    let yearsOfDeath = people.map(({ yearOfDeath }) => yearOfDeath);
    // let names = people.map(({ name }) => name);
    let ages = yearsOfDeath;

    // People without death date is given the actual date
    for (let i = 0; i < yearsOfDeath.length; i++){
        if (yearsOfDeath[i] == undefined)
            yearsOfDeath[i] = 2022;
    }

    ages = ages.map((death, i) => death - yearsOfBirth[i]);

    let max = Math.max(...ages);

    return people[ages.indexOf(max)];
};

// Do not edit below this line
module.exports = findTheOldest;
