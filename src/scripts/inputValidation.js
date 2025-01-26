const input = document.getElementById('depth');

input.addEventListener('input', () => {
  let value = Number(input.value);

  if (value < 1) {
    input.value = 1;
  } else if (value > 3) {
    input.value = 3;
  }
});

input.addEventListener('paste', (e) => {
  const pastedData = e.clipboardData.getData('number');

  if (isNaN(pastedData) || pastedData < 1 || pastedData > 3) {
    e.preventDefault();
  }
});