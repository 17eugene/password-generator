import refs from './src/js/refs';
import { generateRandom } from './src/js/generateRandom';
import { copyPassword } from './src/js/copyAction';

refs.generateBtn.addEventListener('click', generatePassword);
refs.copyBtn.addEventListener('click', () => copyPassword(refs.generatedPw.value));

function generatePassword() {
  let pwLength = Number(refs.choosenLength.value);
  let minPwLength = Number(refs.choosenLength.getAttribute('min'));
  let maxPwLength = Number(refs.choosenLength.getAttribute('max'));
  let password = '';

  if (pwLength < minPwLength) {
    refs.choosenLength.value = minPwLength;
    alert(`Minimum length is ${minPwLength}`);
  } else if (pwLength > maxPwLength) {
    refs.choosenLength.value = maxPwLength;
    alert(`Maximum length is ${maxPwLength}`);
  } else {
    for (let i = 0; i < pwLength; i++) {
      const randomValue = generateRandom();
      password += randomValue;
    }
    refs.generatedPw.value = password;
  }
}
