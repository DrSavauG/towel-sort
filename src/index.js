module.exports = function towelSort(matrix) {
    if (!matrix) return [];
    
    let arr = [];
    for (let i = 0; i < matrix.length; i++) {
        i % 2 === 0 ? arr.push(matrix[i]) : arr.push(matrix[i].reverse());
    }
    return arr.flat();
};
