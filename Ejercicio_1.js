var palindromo = function (x) {
    var cadena = "";
    var aux = "";

    for (let i = 0; i < x.length; i++) {
        aux += x[i];
        console.log(aux);
    }

    for (let i = x.length-1; i >=0; i--) {
        cadena+= x[i];
        console.log(cadena);

    }
    if (cadena == aux) {
        console.log("La paralabra es palindroma")
    }

}

