const arregloDeObjetos = (len, key) => {

    let arr = []
    for(let i=1;i<=len;i++) arr.push({[key]:i})
    
    return arr;

}

console.log(arregloDeObjetos(5,'hola'))
console.log(arregloDeObjetos(3,'chau'))