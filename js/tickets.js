const valorTicket = 200;


let descuentoEstudiante = 80;
let descuentoTrainee    = 50;
let descuentoJunior     = 15;

let nombre              = document.getElementById("nombre");
let divErrorNombre      = document.getElementById("msgErrorNombre");
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

const validarCorreo = (correo) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
}

nombre.addEventListener("input", () => {
    quitarClaseError();
});

apellido.addEventListener("input", () => {
    quitarClaseError();
});

correo.addEventListener("input", () => {
    quitarClaseError();
    if (!validarCorreo(correo.value)) {
        correo.classList.add("is-invalid");
    }
});

cantidadTickets.addEventListener("input", () => {
    quitarClaseError();
});

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

    if (correo.value === "" || !validarCorreo(correo.value)) {
        correo.classList.add("is-invalid");
        correo.focus();
        return;
    }

    if (cantidadTickets.value === "") {
        cantidadTickets.classList.add("is-invalid");
        cantidadTickets.focus();
        return;
    }
    
    apellido.addEventListener("input", () => {
        quitarClaseError();
    });
    
    correo.addEventListener("input", () => {
        quitarClaseError();
        if (!validarCorreo(correo.value)) {
            correo.classList.add("is-invalid");
        }
    });
    
    cantidadTickets.addEventListener("input", () => {
        quitarClaseError();
    });


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
btnBorrar.addEventListener("click", resetearTarjetas);


var tarjetaEstudiante = document.getElementById("tarjetaEstudiante");
var tarjetaTrainee    = document.getElementById("tarjetaTrainee");
var tarjetaJunior     = document.getElementById("tarjetaJunior");
var categoriaSelect   = document.getElementById("categoria");

tarjetaEstudiante.addEventListener("click", function() {
    categoriaSelect.value = "estudiante";
    resetearTarjetas();
    tarjetaEstudiante.classList.add("seleccionadaAzul");
});

tarjetaTrainee.addEventListener("click", function() {
    categoriaSelect.value = "trainee";
    resetearTarjetas();
    tarjetaTrainee.classList.add("seleccionadaVerde");
});

tarjetaJunior.addEventListener("click", function() {
    categoriaSelect.value = "junior";
    resetearTarjetas();
    tarjetaJunior.classList.add("seleccionadaNaranja");
});

categoriaSelect.addEventListener("change", function() {
    var categoriaSeleccionada = categoriaSelect.value;
    resetearTarjetas();

    if (categoriaSeleccionada === "estudiante") {
        tarjetaEstudiante.classList.add("seleccionadaAzul");
    } else if (categoriaSeleccionada === "trainee") {
        tarjetaTrainee.classList.add("seleccionadaVerde");
    } else if (categoriaSeleccionada === "junior") {
        tarjetaJunior.classList.add("seleccionadaNaranja");
    }
});

function resetearTarjetas() {
    tarjetaEstudiante.classList.remove("seleccionadaAzul");
    tarjetaTrainee.classList.remove("seleccionadaVerde");
    tarjetaJunior.classList.remove("seleccionadaNaranja");
}
