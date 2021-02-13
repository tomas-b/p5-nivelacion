const moveZeros = arr => {
    let start = []
    let tail = []
    for(let em of arr) {
        if(em===0) {
            tail.push(em)
        } else {
            start.push(em)
        }
    }
    return start.concat(tail)
}

console.log( moveZeros([false,1,0,1,2,0,1,3,"a"]) )
console.log( moveZeros([1,2,0,1,0,1,0,3,0,1]) ) 