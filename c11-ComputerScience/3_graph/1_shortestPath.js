const graph = [
    {start: "A", end: "C", cost: 2},
    {start: "A", end: "B", cost: 4},

    {start: 'B', end: 'C', cost: 5},
    {start: 'B', end: 'D', cost: 10},

    {start: 'C', end: 'E', cost: 3},

    {start: 'D', end: 'F', cost: 11},

    {start: 'E', end: 'D', cost: 4}
]

function getAllPointsFromEndPoint(start){
    return graph.filter(path => path.start == start)
}

let workingSolutions = []
function addAWorkingSolution(solution){
    workingSolutions.push(solution)

    // hope you notice sorting probably isn't optimal and we could be using a tree or something else that inserts in log(n) time
    workingSolutions = workingSolutions.sort((solA, solB) => solA.totalCost - solB.totalCost)
}

function findShortestPath(start, end) {
    const allPathsFromStart = getAllPointsFromEndPoint(start) // get all paths from the start to start our solution set
    allPathsFromStart.forEach(path => {
        const solution = {
            path: [path.start, path.end],
            totalCost: path.cost
        }
        addAWorkingSolution(solution)
    })

    while (workingSolutions.length > 0) // still some paths to search
    {
        var currentPath = workingSolutions.shift()
        const path = currentPath.path
        const lastPoint = path[path.length-1]
        if (lastPoint == end)
            return currentPath
        
        const pathsOut = getAllPointsFromEndPoint(lastPoint)
        pathsOut.forEach(pathOut=> {
            const newPath = {
                path: [...path, pathOut.end],
                totalCost: currentPath.totalCost + pathOut.cost
            }
            addAWorkingSolution(newPath)
        })
    }
    return null;
}

var solution = findShortestPath('A', 'F')
console.log('shortest route is', solution.path, 'at a cost of', solution.totalCost)