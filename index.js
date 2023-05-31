const inputText = document.querySelector('.input-text');
const outputText = document.querySelector('.output-text');
const buttonCopy = document.querySelector('.btn-copy');
const helpMessage = document.querySelector('.help-message');
const helpMessageInstructions = document.querySelector('.help-message-instructions');
const STRINGVALUES = {
  'e': 'enter',
  'i': 'imes',
  'a': 'ai',
  'o': 'ober',
  'u': 'ufat',
}

buttonCopy.style.display = 'none';

function encodeText() {
  if(!validateText()) {
    const stringEncode = encode(inputText.value);
    outputText.value = stringEncode;
    outputText.style.backgroundImage = 'none';
    helpMessage.style.display = 'none';
    helpMessageInstructions.style.display = 'none';
    inputText.value = '';
    buttonCopy.style.display = 'block';
  }
}

function decodeText() {
  if (inputText.value) {
    const stringDecode = decode(inputText.value);
    outputText.value = stringDecode;
    outputText.style.backgroundImage = 'none';
    inputText.value = '';
    buttonCopy.style.display = 'block';
  }
}

function encode(textToEncode) {
  const letterKey = Object.keys(STRINGVALUES);
  const letterValues = Object.values(STRINGVALUES);
  let encodedText = textToEncode.toLowerCase();

  for (let i = 0; i < letterKey.length; i++){
    if (encodedText.includes(letterKey[i])) {
      encodedText = encodedText.replaceAll(letterKey[i], letterValues[i]);
    }
  }

  return encodedText;
}

function decode(textToDecode) {
  const letterKey = Object.keys(STRINGVALUES);
  const letterValues = Object.values(STRINGVALUES);
  let decodedText = textToDecode.toLowerCase();

  for (let i = 0; i < letterValues.length; i++){
    if (decodedText.includes(letterValues[i])) {
      decodedText = decodedText.replaceAll(letterValues[i], letterKey[i]);
    }
  }

  return decodedText;
}

function copyText() {
  navigator.clipboard.writeText(outputText.value)
    .then(() => {
    alert(`Texto copiado: ${outputText.value}`);
    outputText.value = '';
  })
    .catch((error) => {
    alert(`Error: ${error}`);
  });
}

function validateText() {
  const inputText = document.querySelector('.input-text').value.toLowerCase();
  const regex = new RegExp(/^[a-z ]*$/);

  if (inputText === '') {
    alert('Ingresa algún texto');
    location.reload();
    return true;
  }

  if(!inputText.match(regex)) {
    alert('Solo son permitidas letras minúsculas y sin acentos');
    location.reload();
    return true;
  }
}