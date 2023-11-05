const valorTicket = 200;


let descuentoEstudiante = 80;
let descuentoTrainee    = 50;
let descuentoJunior     = 15;

let nombre              = document.getElementById("nombre");
let divErrorNombre      = document.getElementById("msgErrorNombre")
let apellido            = document.getElementById("apellido");
let divErrorApellido    = document.getElementById("msgErrorApellido");
let correo              = document.getElementById("correo");
let divErrorCorreo      = document.getElementById("msgErrorCorreo");
let cantidadTickets     = document.getElementById("cantidad");
let divErrorCantidad    = document.getElementById("msgErrorCantidad");
let categoria           = document.getElementById("categoria");


const quitarClaseError = () => {
    let listaNodos = document.querySelectorAll(".form-control, .form-select");
    for (let i=0;i<listaNodos.length;i++) {
        listaNodos[i].classList.remove("is-invalid");
    } 
}


const totalAPagar = () => {

    quitarClaseError();

    if (nombre.value === "") {
        nombre.classList.add("is-invalid");
        nombre.focus();
        return;
    }

    if (apellido.value === "") {
        apellido.classList.add("is-invalid");
        apellido.focus();
        return;
    }

    if (correo.value === "") {
        correo.classList.add("is-invalid");
        correo.focus();
        return;
    }

    const validoCorreo = correo => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
    }

    if (!validoCorreo(correo.value)) {
        correo.classList.add("is-invalid");
        correo.focus();
        return;
    }

    if (cantidad.value === "") {
        cantidad.classList.add("is-invalid");
        cantidad.focus();
        return;
    }


    let totalValorTickets = (cantidadTickets.value) * valorTicket;

    switch (categoria.value) {
        case "invitado":
            totalValorTickets;
            break;
        case "estudiante":
            totalValorTickets = totalValorTickets - (descuentoEstudiante / 100 * totalValorTickets);
            break;
        case "trainee":
            totalValorTickets = totalValorTickets - (descuentoTrainee / 100 * totalValorTickets);
            break;
        case "junior":
            totalValorTickets = totalValorTickets - (descuentoJunior / 100 * totalValorTickets);
            break;
    }
    totalPago.innerHTML = totalValorTickets;
}


btnResumen.addEventListener("click", totalAPagar);

const resetTotalAPagar = () => {
    quitarClaseError();
    totalPago.innerHTML = "";
}

btnBorrar.addEventListener("click", resetTotalAPagar);