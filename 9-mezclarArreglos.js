const mezclarArreglos = (arr, arr2) => {
    let ret = []
    let max = Math.max(arr.length, arr2.length);
    for(let i=0;i<max;i++) {
        if(arr[i]) ret.push(arr[i])
        if(arr2[i]) ret.push(arr2[i])
    }
    return ret;
}

console.log( mezclarArreglos([1,2,3,4],['h','o','l','a']) )
console.log( mezclarArreglos([1,2,3,4],['h','p']) )
console.log( mezclarArreglos(['h','p'],[1,2,3,4]) )