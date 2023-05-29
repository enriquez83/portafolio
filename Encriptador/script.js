// Función para encriptar una palabra
function encriptarPalabra(palabra) {
    let encriptada = '';
    for (let i = 0; i < palabra.length; i++) {
      switch (palabra[i]) {
        case 'e':
          encriptada += 'enter';
          break;
        case 'i':
          encriptada += 'imes';
          break;
        case 'a':
          encriptada += 'ai';
          break;
        case 'o':
          encriptada += 'ober';
          break;
        case 'u':
          encriptada += 'ufat';
          break;
        default:
          encriptada += palabra[i];
      }
    }
    return encriptada;
  }
  
  // Función para desencriptar una palabra
  function desencriptarPalabra(palabra) {
    let desencriptada = '';
    let i = 0;
    while (i < palabra.length) {
      if (palabra[i] === 'e' && palabra[i + 1] === 'n' && palabra[i + 2] === 't' && palabra[i + 3] === 'e' && palabra[i + 4] === 'r') {
        desencriptada += 'e';
        i += 5;
      } else if (palabra[i] === 'i' && palabra[i + 1] === 'm' && palabra[i + 2] === 'e' && palabra[i + 3] === 's') {
        desencriptada += 'i';
        i += 4;
      } else if (palabra[i] === 'a' && palabra[i + 1] === 'i') {
        desencriptada += 'a';
        i += 2;
      } else if (palabra[i] === 'o' && palabra[i + 1] === 'b' && palabra[i + 2] === 'e' && palabra[i + 3] === 'r') {
        desencriptada += 'o';
        i += 4;
      } else if (palabra[i] === 'u' && palabra[i + 1] === 'f' && palabra[i + 2] === 'a' && palabra[i + 3] === 't') {
        desencriptada += 'u';
        i += 4;
      } else {
        desencriptada += palabra[i];
        i++;
      }
    }
    return desencriptada;
  }
  
  // Obtener elementos del DOM
  const inputTexto = document.getElementById('texto');
  const buttonEncriptar = document.getElementById('encriptar');
  const buttonDesencriptar = document.getElementById('desencriptar');
  const inputResultado = document.getElementById('resultado');
  const buttonCopiar = document.getElementById('copiar');
  
  // Función para copiar el resultado al portapapeles
  function copiarResultado() {
    inputResultado.select();
    document.execCommand('copy');
  }
  
  // Manejar el evento click del botón Encriptar
  buttonEncriptar.addEventListener('click', function() {
    const texto = inputTexto.value.toLowerCase();
    const encriptada = encriptarPalabra(texto);
    inputResultado.value = encriptada;
  });
  
  // Manejar el evento click del botón Desencriptar
  buttonDesencriptar.addEventListener('click', function() {
    const texto = inputTexto.value.toLowerCase();
    const desencriptada = desencriptarPalabra(texto);
    inputResultado.value = desencriptada;
  });
  
  // Manejar el evento click del botón Copiar
  buttonCopiar.addEventListener('click', copiarResultado);
  