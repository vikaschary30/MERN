let amount=323578908.32;
let currencycode='USD';
function convertcurrency(amount, currencycode){
  return amount.toLocaleString(`en-${currencycode.slice(0,2)}`, {
    style: 'currency',
    currency: currencycode
  });
}
console.log(convertcurrency(amount, currencycode));