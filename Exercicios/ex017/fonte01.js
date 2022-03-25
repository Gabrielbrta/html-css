
function soma(){

var numero1 = document.getElementById('valor')
var numero2 = document.getElementById('valor2')

var n1 = Number(numero1.value)
var n2 = Number(numero2.value)

var somar = n1 + n2;

var res = document.getElementById('res')
res.innerHTML = `A soma dos números <strong>${n1}</strong> e <strong>${n2}</strong> é igual a ${somar}`


if(n1 <= -1 && n2 <= -1){
  res.innerHTML = 'Escolha números válidos'
}
}