const arregloDeObjetos = len => {

    let arr = []
    for(let i=1;i<=len;i++) arr.push({valor:i})
    
    return arr;

}

console.log(arregloDeObjetos(5))
console.log(arregloDeObjetos(3))