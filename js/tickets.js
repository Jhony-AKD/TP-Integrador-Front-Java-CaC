const valorTicket = 200;


let descuentoEstudiante = 80;
let descuentoTrainee    = 50;
let descuentoJunior     = 15;

let nombre              = document.getElementById("nombre");
let divErrorNombre      = document.getElementById("msgErrorNombre")
let apellido            = document.getElementById("apellido");
let divErrorApellido    = document.getElementById("msgErrorApellido");
let mail                = document.getElementById("correo");
let cantidadTickets     = document.getElementById("cantidad");
let categoria           = document.getElementById("categoria");


const quitarClaseError = () => {
    let listaNodos = document.querySelectorAll(".form-control, .form-select");
    for (let i=0;i<listaNodos.length;i++) {
        listaNodos[i].classList.remove("is-invalid");
    }
    let listaNodosDiv = document.querySelectorAll(".invalid-feedback");
    for(let i=0;i<listaNodosDiv.length;i++){
        listaNodosDiv[i].classList.remove("propia");
    }  
}


const totalAPagar = () => {

    quitarClaseError();

    if (nombre.value === "") {
        nombre.classList.add("is-invalid");
        divErrorNombre.classList.add("propia");
        nombre.focus();
        return;
    }

    if (apellido.value === "") {
        apellido.classList.add("is-invalid");
        divErrorApellido.classList.add("propia");
        apellido.focus();
        return;
    }




    let totalValorTickets = (cantidadTickets.value) * valorTicket;


    switch (categoria.value) {
        case "invitado":
            totalValorTickets = totalValorTickets ;
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