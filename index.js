const inputText = document.querySelector('.input-text');
const outputText = document.querySelector('.output-text');
const buttonCopy = document.querySelector('.btn-copy')
buttonCopy.style.display = "none"
const STRINGVALUES = {
  'e': 'enter',
  'i': 'imes',
  'a': 'ai',
  'o': 'ober',
  'u': 'ufat',
}

function encodeText() {
  const stringEncode = encode(inputText.value);
  outputText.value = stringEncode;
  outputText.style.backgroundImage = 'none';
  inputText.value = '';
  buttonCopy.style.display = 'block';
}

function decodeText() {
  const stringDecode = decode(inputText.value);
  outputText.value = stringDecode;
  outputText.style.backgroundImage = 'none';
  inputText.value = '';
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