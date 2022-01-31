function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let pas = document.getElementById('txtp')
    let res = document.getElementById('res')
   
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
       res.innerHTML = 'Impossivel Contar!' 
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        if (i < f) {
            for(let r = i; r <= f; r += p) {
            res.innerHTML += `${r} \u{1F449}`
           } 
    } else {
            for(let r = i; r >= f; r -= p) {
                res.innerHTML += `${r} \u{1F449}`
        }
        
        }
        res.innerHTML += `\u{1F3C1}`
    }
}