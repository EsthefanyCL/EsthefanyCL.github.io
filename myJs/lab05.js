(function(){
    window.onload = function () {
        let apeNomIngresado = document.getElementById("apellido_nombre");
        let fNaciIngresado = document.getElementById("fecha_n");
        
        var extraerButton = document.getElementById("extraer");
        extraerButton.onclick = extraerdatos;
        
        function extraerdatos(){
        
            //extraer Apellidos
            let listaApeNombre = apeNomIngresado.value.split(" ");
            apellidoPa = listaApeNombre[0];
            apellidoMa = listaApeNombre[1];
            document.getElementById("miAPa").value = " "+apellidoPa;
            document.getElementById("miAMa").value = " "+apellidoMa;
            
            //extraer Nombres
            nombre1  = listaApeNombre[2];
            nombre2 = listaApeNombre[3];
           // nombre3 = listaApeNombre[4];
            nombreCompleto = " "+ nombre1 + " " +nombre2;
            document.getElementById("miNom").value = nombreCompleto;

            //Longitud Apellido
            logApellido = listaApeNombre[0].length+listaApeNombre[1].length;
            document.getElementById("longitudA").value = " " + logApellido;

            //edad 
          
            let textFechaN = fNaciIngresado.value.split('-');
            let fechaActual = new Date();
            let fechaNacimiento = new Date(textFechaN);
            let edad = fechaActual.getFullYear()-fechaNacimiento.getFullYear();
            let edadmeses = fechaActual.getMonth()-fechaNacimiento.getMonth(); 
            if(edadmeses<0){
                edad = edadA-1;
                return edad;
            }          
            document.getElementById("miEdad").value =" "+ edad;

            mes = textFechaN[1];
            
            switch(mes){
                case "01":  mesLetra="Enero";
                break;
                case "02": mesLetra ="Febrero";
                break;
                case "03": mesLetra ="Marzo";
                break;
                case "04": mesLetra ="Abril";
                break;
                case "05": mesLetra ="Mayo";
                break;
                case "06": mesLetra ="Junio";
                break;
                case "07": mesLetra="Julio";
                break;
                case "08": mesLetra ="Agosto";
                break;
                case "09": mesLetra ="Septiembre";
                break;
                case "10": mesLetra ="OCtubre";
                break;
                case "11": mesLetra ="Noviembre";
                break;
                case "12": mesLetra ="Diciembre";
                break;
                default:
                    console.log(' er');
                
            }
            document.getElementById("mesNacimiento").value = " " + mesLetra;
        }
    
           
    }
})();


