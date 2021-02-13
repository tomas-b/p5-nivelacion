const reverseKeys = obj => {
    if (obj instanceof Array) return(`input can't be a Array`)
    if (typeof obj !== 'object') return(`input can't be a ${typeof obj}`)

    let ret = {}

    for(let key of Object.keys(obj)) {
        if(typeof obj[key] === 'string') {
            ret[obj[key]] = key
        } else {
            ret[key] = obj[key]
        }
    }

    return ret;
}

var prueba = {
    nombre: 'santi',
    edad: 22,
    nacionalidad: 'de otro planeta',
    documento: 44444444
}

console.log(reverseKeys(344))
console.log(reverseKeys([]))
console.log(reverseKeys('hola'))
console.log(reverseKeys(prueba))