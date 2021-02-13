const nuevoArreglo = len => {
    return Array.from( Array(len+1).keys() ).slice(1)
}

console.log( nuevoArreglo(5) )
console.log( nuevoArreglo(10) )