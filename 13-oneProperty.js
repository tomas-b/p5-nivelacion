const oneProperty = (arr, str) => {
    let ret = [];
    for(let user of arr) ret.push({[str]: user[str]})
    return ret;
}

var arreglo = [ { name: 'lucas', edad: 20 }, { name: 'santi', edad: 22 } ]
console.log( oneProperty(arreglo, 'edad') )
console.log( oneProperty(arreglo, 'name') )
