module.exports = function towelSort(matrix) {
    let arr = [];
    if (matrix)
        matrix.forEach((el, i) => {
            if (i % 2 !== 0) el.reverse();
            arr.push(el);
        });
    return arr.flat();
};
