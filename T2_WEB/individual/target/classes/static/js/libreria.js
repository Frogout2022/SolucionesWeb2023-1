function enviarDatos(){
    
    var nombre= document.getElementById("txtNombre").value;
    var cantidad = document.getElementById("txtCantidad").value;
    var precioUni = parseFloat(document.getElementById("txtPrecioUni").value);
    var cupon = document.getElementById("txtCupon").value;
    var factura = document.getElementById("comprobante").value;
    var haycup = false;
    
    if(nombre.length == 0 || cantidad.length == 0 || precioUni.length==0) alert('Los campos nombre, cantidad o precio no pueden estar vacíos');
    else{
        if(isNaN(cantidad) || cantidad == 0) alert('La cantidad ingresada no es valida');
        else if(isNaN(precioUni) || precioUni==0)alert('El precio unitario ingresado no es valido');
        else if(cupon.length == 6) {
            //validar cupon
            var cad = cupon[0]+cupon[1]+cupon[2];
            if(cad == "CUP" || cad == "cup"){
                if( !isNaN(cupon[3]) && !isNaN(cupon[4]) && !isNaN(cupon[5]) ){
                    //VALIDAR SI NO SON LETRAS LOS ULTIMOS 3 CARACTERES
                    if( cupon[3]==0 && cupon[4]==0 && cupon[5]==0){
                        // PRIMER CUPON VALIDO CUP001
                        alert('cupon no valido');
                    }else{
                        //CUPON VALIDADO
                        haycup = true;
                        codcupon = cupon[5]; //ENVIAR ULTIMO DIGITO DEL CUPON
                        //link
                        window.location.href="http://localhost:8091/Calculo/resultado/"+nombre+"/"+cantidad+"/"+precioUni+"/"+haycup+"/"+codcupon+"/"+factura;
                    }
                }else alert('cupon no valido'); //casi valido
            }else alert('cupon no valido');
           }else if(cupon.length == 0){
            haycup = false; //No ingresó cupon
            codcupon = 0;
            window.location.href="http://localhost:8091/Calculo/resultado/"+nombre+"/"+cantidad+"/"+precioUni+"/"+haycup+"/"+codcupon+"/"+factura;
           }else alert('cupon ingresado no valido');
    }  
 
}
