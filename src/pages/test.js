function generatePowerSet(nums) {
    const result = [[]];

    for (const num of nums) {
        const newSubsets = [];
        for (const subset of result) {
            newSubsets.push([...subset, num]);
        }
        result.push(...newSubsets); 
    }

    return result;
}

const nums = [1, 2, 3];
const powerSet = generatePowerSet(nums);
console.log(powerSet);