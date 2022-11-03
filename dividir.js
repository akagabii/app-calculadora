const dividir = function(a,b){
    if (a && b != 0){
        return "El resultado de la división es:" +' '+  a / b;
    } else {
        return 'No se puede dividir por cero';
    }
    
}
module.exports = dividir;