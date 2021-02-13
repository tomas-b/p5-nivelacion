const rotar = (arr, num) => {
    for(;num>0;num--) arr = [arr.pop()].concat(arr)
    return arr
}

console.log(rotar([1,2,3,4,5],2))
console.log(rotar([1,2,3,4,5],3))