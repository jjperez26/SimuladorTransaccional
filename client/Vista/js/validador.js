const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    numeroCelular: /^\d{7,14}$/, // 7 a 14 numeros.
    tipoDocumento: /^\d/, // numeros.
    numeroDocumento: /^\d{4,15}$/, // 4 a 15 numeros.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    dirección: /^[a-zA-Z0-9.#\s-]{1,30}$/, // Letras, numeros y numeral
    contraseña: /^.{4,12}$/, // 4 a 12 digitos.
    rcontraseña: /^.{4,12}$/, // 4 a 12 digitos.
    saldo: /^.{1,12}$/, // 4 a 12 digitos.
    tipoPerfil: /^[a-zA-Z]{1,10}$/, // Letras.
    Estadocuenta: /^[a-zA-Z]{1,40}$/, // Letras.
}

const campos = {
	nombre: false,
	numeroCelular: false,
	tipoDocumento: false,
	numeroDocumento: false,
	correo: false,
    dirección: false,
    contraseña: false,
    rcontraseña: false,
    saldo: false,
    tipoPerfil: false,
    Estadocuenta: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		    break;
		case "numeroCelular":
			validarCampo(expresiones.numeroCelular, e.target, 'numeroCelular');
		    break;
		case "tipoDocumento":
			validarCampo(expresiones.tipoDocumento, e.target, 'tipoDocumento');
		    break;
		case "numeroDocumento":
            validarCampo(expresiones.numeroDocumento, e.target, 'numeroDocumento');
		    break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		    break;
		case "dirección":
			validarCampo(expresiones.dirección, e.target, 'dirección');
		    break;
        case "contraseña":
            validarCampo(expresiones.contraseña, e.target, 'contraseña');
            validarPassword2();
            break;
        case "rcontraseña":
            validarCampo(expresiones.rcontraseña, e.target, 'rcontraseña');
            validarPassword2();
            break;
        case "saldo":
            validarCampo(expresiones.saldo, e.target, 'saldo');
            break;
        case "tipoPerfil":
            validarCampo(expresiones.tipoPerfil, e.target, 'tipoPerfil');
            break;
        case "Estadocuenta":
            validarCampo(expresiones.Estadocuenta, e.target, 'Estadocuenta');
            break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('form__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('form__grupo-correcto');
		document.querySelector(`#grupo__${campo} .input--error`).classList.remove('input--error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('form__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('form__grupo-correcto');
		document.querySelector(`#grupo__${campo} .input--error`).classList.add('input--error-activo');
		campos[campo] = false;
	}
}

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('contraseña');
	const inputPassword2 = document.getElementById('rcontraseña');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`grupo__rcontraseña`).classList.add('form__grupo-incorrecto');
		document.getElementById(`grupo__rcontraseña`).classList.remove('form__grupo-correcto');
		document.querySelector(`#grupo__rcontraseña .input--error`).classList.add('input--error-activo');
		campos['contraseña'] = false;
	} else {
		document.getElementById(`grupo__rcontraseña`).classList.remove('form__grupo-incorrecto');
		document.getElementById(`grupo__rcontraseña`).classList.add('form__grupo-correcto');
		document.querySelector(`#grupo__rcontraseña .input--error`).classList.remove('input--error-activo');
		campos['contraseña'] = true;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

function registro(event) {
    event.preventDefault();
    var nombre = document.getElementById("nombre").value
    var tipoDocumento = document.getElementById("tipoDocumento").value
    var numeroDocumento = document.getElementById("numeroDocumento").value
    var numeroCelular = document.getElementById("numeroCelular").value
    var correo = document.getElementById("correo").value
    var rcontraseña = document.getElementById("rcontraseña").value
    var direccion = document.getElementById("direccion").value
    var saldo = document.getElementById("saldo").value
    var tipoPerfil = document.getElementById("tipoPerfil").value
    var Estadocuenta = document.getElementById("Estadocuenta").value

    const formData={
         NOMBRE_USUARIO : nombre,
         DOCUMENTO : numeroDocumento,
         TIPO_DOCUMENTO : tipoDocumento,
         NUMERO_CELULAR : numeroCelular,
         CORREO : correo,
         PASSWORD : rcontraseña,
         DIRECCION : direccion,
         SALDO : saldo,
         ESTADO_CUENTA : Estadocuenta,
         PERFIL : tipoPerfil

     }   

     fetch('http://localhost:3001/user/crearUsuario', 
     {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(formData)
    })
    .then(res => {
        return res.json();
    })
    .then(data => {
    console.log("Respuesta exitosa", data);
    })
         .catch(err => console.log(formData, err))
}


formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	if(campos.nombre && campos.numeroCelular && campos.numeroDocumento && campos.correo && campos.dirección && campos.contraseña && campos.saldo){
		document.getElementById('form--mensage').style.display = "none";
        registro(e)
        try {
            alert("Usuario registrado")
            location.reload();
        } catch (error) {
            console.log("Error")
        }
	} else {
		document.getElementById('form--mensage').style.display = "block";
	}
});