function findCountDuplicates(target, arr = []) {
    if (!Array.isArray(arr)) return 0;
    let obj = { target: 0 };
    arr.forEach(ele => {
        if (ele === target) obj.target++;
    });
    return obj.target;
}
const arr = [1, 1, 2, 2, 3, 1, 1, 3, 4, 1, 1],
    target = 1;
console.log(findCountDuplicates(target, null));

module.exports = {
    findCountDuplicates
};
