let numero1 = prompt("insera el primer numero");
let numero2 = prompt("inserte el segundo numero");
let operacion = numero1 / numero2;
let resultado;
if (numero2 != 0) {
  resultado = numero1 / numero2
  alert(resultado)
} else {
  alert("No puedes dividir entre 0")
}