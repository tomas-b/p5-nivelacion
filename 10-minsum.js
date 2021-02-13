const minSum = arr => {
    let [low, lowIdx, low2] = [null, null, null]
    for(let i=0;i<arr.length;i++) {
        if(low == null || arr[i] < low) {
            low = arr[i];
            lowIdx = i;
        }
    }
    delete arr[lowIdx];
    for(let i=0;i<arr.length;i++) {
        if(low2 == null || arr[i] < low2) low2 = arr[i];
    }
    console.log(low, low2, (low+low2))

}

minSum([7, 6, 5, 4, 3, 2, 1])
minSum([1, 10, 43, 900, 20, 8]) 