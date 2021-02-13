const validarPrefijo = num => {

    const prefijos = [54, 55, 56, 57, 58]
    const paises = ["argentina", "brasil", "chile", "colombia", "venezuela"]

    let prefDir = {}
    for(let i=0;i<prefijos.length;i++) {
        prefDir[prefijos[i]] = paises[i]
    }

    let pais = prefDir[num.substr(0,2)]
    return pais ? `Este número pertenece a ${pais}.` : `El número no pertenece a nuestros paises`

}


console.log(validarPrefijo('5412345678'))
console.log(validarPrefijo('412345678'))