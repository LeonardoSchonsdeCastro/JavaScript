let codigos = [2, 5, 1, 6, 7]

//console.log(codigos)

/*
for(cod=0;cod<codigos.length;cod++) {
    console.log(`A posição ${cod} tem o valor ${codigos[cod]}`)
} 
*/

for(let cod in codigos) {
    console.log(`A posição ${cod} tem o valor ${codigos[cod]}`)
}
 