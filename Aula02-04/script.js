
function gravar() {
    document.getElementById("n1").textContent = mostrar();
    document.getElementsByClassName("digito").textContent = document.getElementById("n1").innerHTML;
}

function mostrar() {
    let txt = BinaryGap();
    return txt;
}

function BinaryGap() {
    let num = document.getElementById("valor").value;

    var bin = Math.abs(num).toString(2),
        valorFinal = 0,
        aux;
    
    for (var i = 0; i <= bin.length; i++) {
      aux = 0;
      while (bin[i] === "0") {
        ++aux && ++i;
      }
      valorFinal = Math.max(valorFinal, aux);
    }
    return valorFinal;
  }
