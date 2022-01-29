function calcular() {
    if(document.getElementById("peso").value == "") {
        alert("Por favor preencha o campo peso!");
        document.getElementById("peso").style.borderColor="red";
        document.getElementById("peso").style.backgroundColor="red";
        document.getElementById("peso").focus();
        return false;
    }
    if(document.getElementById("altura").value == "") {
        alert("Por favor preencha o campo altura!");
        document.getElementById("altura").style.borderColor="red";
        document.getElementById("altura").style.backgroundColor="red";
        document.getElementById("altura").focus();
        return false;
    }
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var resultado = peso/(altura*altura);
    alert("Your IMC is: "+resultado);
    document.getElementById("altura").style.borderColor="white";
    document.getElementById("altura").style.backgroundColor="white";
    document.getElementById("peso").style.borderColor="white";
    document.getElementById("peso").style.backgroundColor="white";
    return true;
}
function carregar() {
    var nome = prompt("Qual seu nome?");
    var p = document.querySelector("#entrada");
    p.innerText = ("Hello "+nome+"! Welcome to the");
}