const findTheOldest = function(people) {
  let oldestAge = 0;
  const currentYear = new Date().getFullYear();
  let oldestPerson = null;
  for (const person of people) {
    let age = 0;
    if (Object.hasOwn(person, "yearOfDeath")) {
      age = person.yearOfDeath - person.yearOfBirth;
    }
    else {
      age = currentYear - person.yearOfBirth;
    }

    if (age > oldestAge) {
      oldestPerson = person;
      oldestAge = age;
    }
  }
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
