const arr = [
    { id: 1, name: 'Node 1', parentId: null },
    { id: 2, name: 'Node 2', parentId: 1 },
    { id: 3, name: 'Node 3', parentId: 1 },
    { id: 4, name: 'Node 4', parentId: 2 },
    { id: 5, name: 'Node 5', parentId: 2 },
]

const fun = (arr) => {
    const map = new Map()
    
    arr.forEach(item => {
        item.children = []
        map.set(item.id, item)
    })
    
    arr.forEach(item => {
        let obj = map.get(item.parentId)
        if (obj) {
            obj.children.push(item)
        }
    })
    
    console.log(arr)
    
    
}


fun(arr)