//Declaración de variables
var nombreUsuario = "Michael Colquicocha";
var saldoCuenta = 1000;
var limiteExtraccion = 5000;
var agua = 350;
var telefono = 425;
var luz = 210;
var internet = 570;
var cuentaAmiga1 = 1234567;
var cuentaAmiga2 = 7654321;
var Password = 1234;
//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


//Funciones que tenes que completar
iniciarSesion();
function sumarDinero(sumar){
    saldoCuenta+=sumar;
}

function restarDinero(restar){
    saldoCuenta-=restar;
}

function cambiarLimiteDeExtraccion() {
    limiteExtraccion = prompt("ingrese monto");
    if(limiteExtraccion != null && limiteExtraccion != ""){
        actualizarLimiteEnPantalla();
        alert("Nuevo limite de extraccion: " + limiteExtraccion);
    }
}

function extraerDinero() {
    extraccion = parseInt(prompt("ingrese monto"));
    var saldoAnterior = saldoCuenta;
    var billetes = 100;
    restar = extraccion;
    if(extraccion != null && extraccion != "" && extraccion){
        if(saldoCuenta>=extraccion){
            if(limiteExtraccion>=extraccion){
                if(extraccion % billetes === 0){
                    restarDinero(restar);
                    actualizarSaldoEnPantalla();
                    alert("Has extraido: " + extraccion + "\nSaldo anterior: " + saldoAnterior + "\nSaldo actual: " + saldoCuenta);
                }else {
                    alert("solo puedes extraer billetes de 100");
                }
            }else {
                alert("supera el limite permitido");
            }
        }else {
            alert("no dispone fondos");
        }
    }      
}

function depositarDinero() {
    deposito =parseInt(prompt("ingrese monto"));
    var saldoAnterior = saldoCuenta;
    sumar = deposito;
    if (deposito != null && deposito != "" && deposito) {
        sumarDinero(sumar);
        actualizarSaldoEnPantalla();
        alert("Has depositado: " + deposito + "\nSaldo anterior: " + saldoAnterior + "\nSaldo actual: " + saldoCuenta);
    }
}

function pagarServicio() {
    var tipoDeServicio = prompt("Ingresa el numero del servicio que queres pagar" + "\n1-Luz" + "\n2-Agua" + "\n3-Internet" + "\n4-Telefono");
    var saldoAnterior = saldoCuenta;
    restar = luz, agua, internet, telefono;
    if (tipoDeServicio != null && tipoDeServicio != "") {
      switch (tipoDeServicio) {
        case "1":
            if (saldoCuenta >= luz) {
                restarDinero(luz);
                console.log("se ejecuto con exito la luz.");
                actualizarSaldoEnPantalla();
                alert("Has pagado el servicio Luz." + "\nSaldo anterior: " + saldoAnterior + "\nDinero descontado: " + luz + "\nSaldo actual: " + saldoCuenta);
            } else {
                alert("no dispone de dinero suficiente para realizar esta operacion.");
          }
        break;
        case "2":
            if (saldoCuenta >= agua) {
                restarDinero(agua);
                console.log("se ejecuto con exito el agua.");
                actualizarSaldoEnPantalla();
                alert("Has pagado el servicio Agua" + "\nSaldo anterior: " + saldoAnterior + "\nDinero descontado: " + agua + "\nSaldo actual: " + saldoCuenta);
            } else {
                alert("no dispone de dinero suficiente para realizar esta operacion");
            }
        break;
        case "3":
            if (saldoCuenta >= internet) {
                restarDinero(internet);
                console.log("se ejecuto con exito el internet.");
                actualizarSaldoEnPantalla();
                alert("Has pagado el servicio Internet" + "\nSaldo anterior: " + saldoAnterior + "\nDinero descontado: " + internet + "\nSaldo actual: " + saldoCuenta);
            } else {
                alert("no dispone de dinero suficiente para realizar esta operacion");
            }
        break;
        case "4":
            if (saldoCuenta >= telefono) {
                restarDinero(telefono);
                console.log("se ejecuto con exito el telefono.");
                actualizarSaldoEnPantalla();
                alert("Has pagado el servicio Telefono" + "\nSaldo anterior: " + saldoAnterior + "\nDinero descontado: " + telefono + "\nSaldo actual: " + saldoCuenta);
            } else {
                alert("no dispone de dinero suficiente para realizar esta operacion");
            }
        break;
        default:
            if(tipoDeServicio !== null && tipoDeServicio !== "") {
                alert("no sabemos nada sobre " + tipoDeServicio + ".");
            }
        }
    }
}


function transferirDinero() {
    var montoAtransferir = parseInt(prompt("Cual es la monto que desea transferir?"));
    var saldoAnterior = saldoCuenta;
        if(montoAtransferir != null && montoAtransferir != "" && montoAtransferir){
            if(saldoCuenta >= montoAtransferir){
                var cuentaAtransferir =prompt("ingrese el numero de la cuenta");
                    if (cuentaAtransferir == cuentaAmiga1 || cuentaAtransferir == cuentaAmiga2) {
                        saldoCuenta -= montoAtransferir;
                        actualizarSaldoEnPantalla();
                        alert("Has transferido :" + montoAtransferir + "\nCuenta destino :" + cuentaAtransferir);
                    } else{
                        alert("No es ninguna de las cuentas amigas 1 y 2.");
                    }
            }else{
                alert("La cuenta no dispone del monto indicado para realizar la transferencia.")
            }
        }
}

function iniciarSesion() {
    var confirmPassword = parseInt(prompt("Ingrese su codigo de seguridad"));
        if(confirmPassword != null && confirmPassword != "" && Password != null && Password != ""){
            if(confirmPassword == Password){
                alert("Bienvenido/a " + nombreUsuario + " ya puedes realizar operaciones.");
            } else{
                saldoCuenta = 0;
                nombreUsuario = "";
                alert("Codigo incorrecto. Tu dinero ha sido retenido por cuestiones de seguridad.");
            }
        }
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}