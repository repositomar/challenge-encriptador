const inputText = document.querySelector('.input-text');
const outputText = document.querySelector('.output-text');
const buttonCopy = document.querySelector('.btn-copy')
const helpMessage = document.querySelector('.help-message')
const helpMessageInstructions = document.querySelector('.help-message-instructions')
buttonCopy.style.display = 'none'
const STRINGVALUES = {
  'e': 'enter',
  'i': 'imes',
  'a': 'ai',
  'o': 'ober',
  'u': 'ufat',
}

function encodeText() {
  if(!validateText()) {
    const stringEncode = encode(inputText.value).toLowerCase();
    outputText.value = stringEncode;
    outputText.style.backgroundImage = 'none';
    helpMessage.style.display = 'none';
    helpMessageInstructions.style.display = 'none';
    inputText.value = '';
    buttonCopy.style.display = 'block';
  }
}

function decodeText() {
  const stringDecode = decode(inputText.value).toLowerCase();
  outputText.value = stringDecode;
  outputText.style.backgroundImage = 'none';
  inputText.value = '';
  buttonCopy.style.display = 'block';
}

function encode(stringToEncode) {
  const letterKey = Object.keys(STRINGVALUES);
  const letterValues = Object.values(STRINGVALUES);

  for (let i = 0; i < letterKey.length; i++){
    if (stringToEncode.includes(letterKey[i])) {
      stringToEncode = stringToEncode.replaceAll(letterKey[i], letterValues[i]);
    }
  }
  return stringToEncode;
}

function decode(stringToDecode) {
  const letterKey = Object.keys(STRINGVALUES);
  const letterValues = Object.values(STRINGVALUES);

  for (let i = 0; i < letterValues.length; i++){
    if (stringToDecode.includes(letterValues[i])) {
      stringToDecode = stringToDecode.replaceAll(letterValues[i], letterKey[i]);
    }
  }
  return stringToDecode;
}

function copyText() {
  outputText.select();
  navigator.clipboard.writeText(outputText.value)
  outputText.value = '';
  alert('Texto Copiado')
}

function validateText() {
  const inputText = document.querySelector('.input-text').value.toLowerCase();
  const regex = new RegExp(/^[a-z ]*$/);

  if (inputText === '') {
    alert('Ingresa algún texto')
    location.reload();
    return true;
  }

  if(!inputText.match(regex)) {
    alert('Solo son permitidas letras minúsculas y sin acentos')
    location.reload();
    return true;
  }
}