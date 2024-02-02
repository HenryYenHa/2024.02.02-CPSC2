const array = [7,3,5,11,13,2,14,6,1]

function bubblePass(anArray)
{
    // console.log('checking for swaps')
    let anySwaps = false;
    for(var i = 0; i < anArray.length -1; i++) // be careful not to compare the last element with the one past the array
    {
        if (anArray[i] > anArray[i+1]){
            anySwaps = true;
            
            var temp = anArray[i]   // swap by using a place holder to hold one value
            anArray[i] = anArray[i+1]
            anArray[i+1] = temp
        }
    }
    return anySwaps
}

function bubbleSort(myArray){
    do {
    } while(bubblePass(myArray))
}

console.log('starting array', array)
bubbleSort(array)
console.log('sorted array', array)