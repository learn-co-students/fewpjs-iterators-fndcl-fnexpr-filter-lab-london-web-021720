// Code your solution here
function findMatching(drivers, string) {
    return  drivers.filter(driver => { return driver.toLowerCase() === string.toLowerCase() })
}


function fuzzyMatch(drivers, string) {
    return  drivers.filter(driver => { return string === driver.splice(0, string.length)  })
}
