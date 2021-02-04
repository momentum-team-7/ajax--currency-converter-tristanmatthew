const fromCurrencyEl = document.getElementById('fromCurrency');
const fromAmountEl = document.getElementById('fromAmount');
const toCurrencyEl = document.getElementById('toCurrency');
const toAmountEl = document.getElementById('toAmount')
const rateEl = document.getElementById('rate');
const conversion = document.querySelector('.conversion');

console.log(fromCurrencyEl);
console.log(fromAmountEl);
console.log(toCurrencyEl);
console.log(toAmountEl);
console.log(rateEl);
console.log(conversion);

fromCurrencyEl.addEventListener('change', calculate);
fromAmountEl.addEventListener('input', calculate);
toCurrencyEl.addEventListener('change', calculate);
toAmountEl.addEventListener('input', calculate);

conversion.addEventListener('click', () => {
  const temp = fromCurrencyEl.value;
  fromCurrencyEl.value = toCurrencyEl.value;
  toCurrencyEl.value = temp;
  calculate();
});


function calculate() {
  const fromCurrency = fromCurrencyEl.value;
  const toCurrency = toCurrencyEl.value;

  fetch(`https://api.exchangeratesapi.io/latest?base=${fromCurrency}`)
    .then(resp => resp.json())
    .then(resp => {
      const rate = resp.rates[toCurrency];
      rateEl.innerText = `1 ${fromCurrency} = ${rate} ${toCurrency}`
      toAmountEl.value = (fromAmountEl.value * rate).toFixed(2);
    })
}

calculate();