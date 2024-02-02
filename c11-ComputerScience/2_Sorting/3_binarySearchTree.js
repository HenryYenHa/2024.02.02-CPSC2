const array = [6,9,11,5,3,7,1]

function createTreeNode(newValue){
    return {value: newValue, less: null, greater: null}
}

function addANodeToATree(newValue, tree){
    if (tree == null)
        return createTreeNode(newValue)
    if (newValue < tree.value)
    {
        if (tree.less == null)
            tree.less = createTreeNode(newValue)
        else
            addANodeToATree(newValue, tree.less)
    } else {
        if (tree.greater == null)
            tree.greater = createTreeNode(newValue)
        else
            addANodeToATree(newValue, tree.greater)
    } 

    return tree
}

function createATree(values){
    var tree = null
    values.forEach(value => {
        tree = addANodeToATree(value, tree)
    });
    return tree
}

const tree = createATree(array)

function writeABinaryTree(tree){
    if (tree.less) writeABinaryTree(tree.less)
    console.log('<', tree.value)
    if (tree.greater) writeABinaryTree(tree.greater)
}

writeABinaryTree(tree)