export function copyPassword(value) {
  const textarea = document.createElement('textarea');

  const password = value;

  if (!password) return;

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert('Copied!');
}
