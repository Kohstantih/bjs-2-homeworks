function compareArrays(arr1, arr2) {
    return (arr1.length === arr2.length && arr1.every(i => arr1[i] === arr2[i]));
};

function getUsersNamesInAgeRange(users, gender) {
    return users.filter(user => user.gender === gender).reduce((acc, item, index, Array) => acc += item.age / Array.length, 0);
};