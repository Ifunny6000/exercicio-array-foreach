let numero = ['65', '44', '12', '4']
let multiplicador = numero.length

numero.forEach(function(item){
    let resultado = Number(item*10) + multiplicador;
    console.log('numero ' + resultado)
})



