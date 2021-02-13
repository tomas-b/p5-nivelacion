const palindromo = str => {
    str = str.toLowerCase();
    let end = str.length;
    let pal = true;
    for(let i=0;i<str.length;i++) {
        end--;
        if (str[i] !== str[end]) {
            pal = false;
            break;
        }
    }
    return pal;
}

console.log( palindromo('anilina') )
console.log( palindromo('Ana') )
console.log( palindromo('Enrique') )