// Función para validar el formulario
function validarFormulario() {
    // Obtener los valores de los campos
    let proyecto = document.getElementById('proyecto').value.trim();
    let centroCosto = document.getElementById('Centro_costo').value.trim();
    let rubro = document.getElementById('Rubro').value.trim();
    let cuenta = document.getElementById('cuenta').value.trim();
    let autorizado = document.getElementById('Autorizado').value;

    // Inicializar la variable de validación
    let esValido = true;

    // Validar campo "Proyecto"
    if (proyecto === "") {
        document.getElementById('proyecto-error').style.display = 'block';
        esValido = false;
    } else {
        document.getElementById('proyecto-error').style.display = 'none';
    }

    // Validar campo "Centro de costo" con minlength y maxlength
    if (centroCosto.length !== 10) {
        document.getElementById('error-message').style.display = 'block';
        esValido = false;
    } else {
        document.getElementById('error-message').style.display = 'none';
    }

    // Validar campo "Rubro"
    if (rubro === "") {
        document.getElementById('rubro-error').style.display = 'block';
        esValido = false;
    } else {
        document.getElementById('rubro-error').style.display = 'none';
    }

    // Validar campo "Cuenta"
    if (cuenta === "") {
        document.getElementById('cuenta-error').style.display = 'block';
        esValido = false;
    } else {
        document.getElementById('cuenta-error').style.display = 'none';
    }

    // Validar campo "Autorizado"
    if (autorizado === "") {
        document.getElementById('autorizado-error').style.display = 'block';
        esValido = false;
    } else {
        document.getElementById('autorizado-error').style.display = 'none';
    }

    // Si el formulario es válido, puedes enviar los datos o proceder con la acción deseada
    if (esValido) {
        alert('Formulario válido. Se procederá a generar el sello.');
    }
}

