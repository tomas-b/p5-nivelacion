const loopDeImpares = (n, word) => {
    for(let i=0;i<101;i++) {
        let x = i + n;
        if(x%2>0) console.log(word)
    }
}

loopDeImpares(20, 'hola')