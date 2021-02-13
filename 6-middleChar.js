const middleCharacter = str => {

    let start = str.length / 2
    let len = 1
    if (str.length % 2 == 0) {
        start--;
        len = 2;
    } else {
        start = Math.floor(start)
    }

    return str.substr(start, len)

}

console.log(middleCharacter('plataforma5'))
console.log(middleCharacter('hola'))
console.log(middleCharacter('cosas'))