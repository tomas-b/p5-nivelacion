const consecutivosSimilares = str => {
    let c = 0;
    for(let i=0;i<str.length-1;i++) {
        if (str.substr(i,1) == str.substr(i+1,1)) c+=1
    }
    return c;
}

console.log(`'AAAA' = 3 -> ${consecutivosSimilares('AAAA')}`)
console.log(`'BBBBB' = 4 -> ${consecutivosSimilares('BBBBB')}`)
console.log(`'ABABABAB' = 0 -> ${consecutivosSimilares('ABABABAB')}`)
console.log(`'BABABA' = 0 -> ${consecutivosSimilares('BABABA')}`)
console.log(`'AAABBB' = 4 -> ${consecutivosSimilares('AAABBB')}`)