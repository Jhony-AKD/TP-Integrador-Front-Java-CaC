const valorTicket = 200;


let descuentoEstudiante = 80;
let descuentoTrainee    = 50;
let descuentoJunior     = 15;

let nombre              = document.getElementById("nombre");
let divErrorNombre      = document.getElementById("msgErrorNombre")
let apellido            = document.getElementById("apellido");
let mail                = document.getElementById("correo");
let cantidadTickets     = document.getElementById("cantidad");
let categoria           = document.getElementById("categoria");


const quitarClaseError = () => {
    let listaNodos = document.querySelectorAll(".campoFormulario");
    for (let i=0;i<listaNodos.length;i++) {
        listaNodos[i].classList.remove("is-invalid");
    }
}   


const totalAPagar = () => {

    quitarClaseError ();

    if (nombre.value === "") {
        nombre.classList.add("is-invalid");
    }

}