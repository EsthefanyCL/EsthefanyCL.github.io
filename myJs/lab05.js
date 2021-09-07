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

            mesAc = fechaActual.getMonth()+1;
            anioAc = fechaActual.getFullYear();
            anioFN = textFechaN[0];
            mesFN = textFechaN[1];

            let edad = anioAc-anioFN;
            let edadmeses = mesAc-mesFN; 
            if(edadmeses<0){
                edad = edadA-1;
                return edad;
            }          
            document.getElementById("miEdad").value =" "+ edad;

            switch(mesFN){
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
                    console.log(' ');   
            }
            document.getElementById("mesNacimiento").value = " " + mesLetra;   
        }

        //colorearButton.addEventListener('click', colorear, true);
        var colorearButton = document.getElementById("colorear");
        colorearButton.onclick = cambiarcolor;


        let colorazul1=document.getElementById("azul1");
        let colorazul2=document.getElementById("azul2");
        let colorazul3=document.getElementById("azul3");
        let colorazul4=document.getElementById("azul4");
        let colorazul5=document.getElementById("azul5");

        let colorrojo1=document.getElementById("rojo1");
        let colorrojo2=document.getElementById("rojo2");
        let colorrojo3=document.getElementById("rojo3");
            
        let c=0;
        function cambiarcolor(){ 
        
            if(c==0){
                colorazul1.classList.add("rojo");
                colorazul2.classList.add("rojo");
                colorazul3.classList.add("rojo");
                colorazul4.classList.add("rojo");
                colorazul5.classList.add("rojo");
                colorrojo1.classList.add("azul");
                colorrojo2.classList.add("azul");
                colorrojo3.classList.add("azul");
                c=1;
            }else{
                colorazul1.classList.remove("rojo");
                colorazul2.classList.remove("rojo");
                colorazul3.classList.remove("rojo");
                colorazul4.classList.remove("rojo");
                colorazul5.classList.remove("rojo");
                colorrojo1.classList.remove("azul");
                colorrojo2.classList.remove("azul");
                colorrojo3.classList.remove("azul");
                c=0;
            }
        }  
    }
})();


