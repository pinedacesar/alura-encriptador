const texto_entrada = document.querySelector('#texto-entrada');
const texto_respuesta = document.querySelector('#texto-respuesta');

const inicial = document.querySelector('.inicial');
const final = document.querySelector('.final');

document.addEventListener('keyup', () => {
  let asento = 'ÁÃÀÄÂÉËÈÊÍÏÌÎÓÖÒÔÚÜÙÛÑÇáãàäâéëèêíïìîóöòôúüùûñç´',
    sinAsento = 'AAAAAEEEEIIIIOOOOUUUUNCaaaaaeeeeiiiioooouuuunc',
    remplazo = new RegExp('[' + asento + ']', 'ug');

  texto_entrada.value = texto_entrada.value.replace(remplazo, (match) =>
    sinAsento.charAt(de.indexOf(match))
  );

  texto_entrada.value = texto_entrada.value.toLowerCase();
});

const matriz_code = [
  ['e', 'enter'],
  ['i', 'imes'],
  ['a', 'ai'],
  ['o', 'ober'],
  ['u', 'ufat'],
];

function btnEncriptar() {
  const texto = encriptar(texto_entrada.value);
  chequearInput(texto);
}

function encriptar(textoEncriptado) {
  for (let i = 0; i < matriz_code.length; i++) {
    if (textoEncriptado.includes(matriz_code[i][0])) {
      textoEncriptado = textoEncriptado.replaceAll(
        matriz_code[i][0],
        matriz_code[i][1]
      );
    }
  }
  return textoEncriptado;
}

function btnDesencriptar() {
  const texto = desencriptar(texto_entrada.value);
  chequearInput(texto);
}

function desencriptar(textoDesencriptado) {
  let newTexto = textoDesencriptado
    .replace(/ufat/g, 'u')
    .replace(/ober/g, 'o')
    .replace(/imes/g, 'i')
    .replace(/enter/g, 'e')
    .replace(/ai/g, 'a');
  textoDesencriptado = newTexto;
  return textoDesencriptado;
}

function chequearInput(texto) {
  if (texto.trim() !== '') {
    texto_respuesta.value = texto;
    texto_entrada.value = '';
    final.classList.remove('none');
    inicial.classList.add('none');
  } else {
    alert('No has ingresado ningun texto');
  }
}

function copiar() {
  texto_respuesta.select();
  navigator.clipboard.writeText(texto_respuesta.value);
  inicial.classList.remove('none');
  final.classList.add('none');
}
