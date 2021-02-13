const warWords = (word1, word2) => {
    const abc = {a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,k:11,l:12,m:13,n:14,o:15,p:16,q:17,r:18,s:19,t:20,u:21,v:22,w:23,x:24,y:25,z:26}
    let [score1, score2] = [null, null];
    for(let chr of word1.split('')) score1 += abc[chr];
    for(let chr of word2.split('')) score2 += abc[chr];
    console.log(`${word1}: ${score1}`)
    console.log(`${word2}: ${score2}`)
    return (score1 > score2) ? word1 : word2
}

console.log( warWords('hola', 'chau') ) 
console.log( warWords('love', 'friendship') ) 
