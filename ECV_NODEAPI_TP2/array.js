const bc_alphabeticSort = (arr) => {
    return arr.sort((a, b) => a.localeCompare(b))
}

const bc_randomElement = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
}

module.exports = {
    bc_alphabeticSort,
    bc_randomElement
}