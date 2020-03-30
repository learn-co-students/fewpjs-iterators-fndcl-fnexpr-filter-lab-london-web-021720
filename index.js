// Code your solution here
function findMatching(array, string) {
    let answer = array.filter( n => {
        return n.toLowerCase() === string.toLowerCase();
    })
    return answer
}


function fuzzyMatch(array, string) {
    let le = string.length
    let answer = array.filter( n => {
        return n.slice(0, le) === string.slice(0, le)
    })
    return answer
}

function matchName(object, string) {
    let answer = object.filter( n => {
        return n.name === string
    })
    return answer
}