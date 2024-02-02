const array = [7,3,5,11,13,2,14,6,1]

function mergeSort(arrayOfNumbers){
    // console.log('sorting array', arrayOfNumbers)
    if (arrayOfNumbers.length === 1)
        return arrayOfNumbers

    const splitPoint = Math.floor(arrayOfNumbers.length/2)
    const sortedFirst = mergeSort(arrayOfNumbers.slice(0,splitPoint))
    const sortedSecond = mergeSort(arrayOfNumbers.slice(splitPoint))

    const result = []
    while (sortedFirst.length > 0 && sortedSecond.length > 0) { // loop while there are still elements to compare in both parts
        if (sortedFirst[0] < sortedSecond[0]) {
           result.push(sortedFirst.shift()) 
        } else {
            result.push(sortedSecond.shift())
        }
    }
    return [...result, ...sortedFirst, ...sortedSecond] // kinda spicy but return the result + the remains of both pats (but one should be empty now)
}

console.log(mergeSort(array))