// Code your solution here
function findMatching(drivers, name)
{
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(drivers, partial)
{
    return drivers.filter(driver => driver.slice(0, partial.length).toLowerCase() === partial.toLowerCase())
}

function matchName(drivers, name)
{
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase())
}