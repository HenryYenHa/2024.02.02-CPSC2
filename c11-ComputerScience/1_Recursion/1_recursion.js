var sentence = ["Welcome", "to", "the", "big", "show"];

var currentList = null
sentence.reverse().forEach(word => {
    currentList = {
        value: word,
        next: currentList
    }
})

// WE NOW HAVE A LINKED LIST (IN THE CORRECT ORDER)
// {value:"Welcome", next:
//      value:"to", next:{
//          value:"the", next:{
//              value:"big", next:{
//                  value:"show", next:null  }}}}}

function writeALinkedList(currentList){
    if (currentList == null)
        return console.log('!')

    console.log(currentList.value)
    writeALinkedList(currentList.next)
}
writeALinkedList(currentList)