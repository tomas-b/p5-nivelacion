const arrayHandler = (arr, arr2) => {

    if(arr.length!==arr2.length) throw 'not same length';

    for(let i=0;i<arr.length;i++) {
        console.log(`Soy ${arr[i]} y yo soy ${arr2[i]}`)
    }

}

arrayHandler([1,3,4], ['h','o','l','a'])