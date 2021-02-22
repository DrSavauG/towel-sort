module.exports = function towelSort(matrix) {
    if (!matrix) return [];
    return matrix
        .reduce((sum, el, i) => {
            if (i % 2 !== 0) el.reverse();
            sum.push(el);
            return sum;
        }, [])
        .flat();
};
