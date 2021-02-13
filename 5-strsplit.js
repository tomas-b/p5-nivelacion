const splitstr = str => {
    let arr = []
    for(let i=0; i<str.length; i++) {
        arr[i] = str.substr(i,1)
    }
    return arr;
}

console.log(splitstr('hola'))
console.log(splitstr('adios'))
console.log(splitstr('plataforma5'))