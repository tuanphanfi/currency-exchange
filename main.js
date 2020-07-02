const exchangeRate = 23208;

function formatCurrency(type, value) {
  const formatter = new Intl.NumberFormat(type, {
    currency: type,
    style: "currency"
  });
  return formatter.format(value);
}

function vndToUsd(amountVnd) {
  const convertAmount = (amountVnd / exchangeRate).toFixed(2)
  return convertAmount;
}

function usdToVnd(amountUsd) {
  const convertAmount = parseInt(amountUsd * exchangeRate);
  return convertAmount;
}

let currency = prompt("Change VND to USD: type VND || Change USD to VND: type USD").toUpperCase();

// if else statement
if (currency === 'VND') {
  let amountVND = prompt("VND to USD --- How much VND you wannt change?");
  if (isNaN(amountVND)) {
    console.log("You did not type a number");
  } else {
    const returnedFromFunctionCall = vndToUsd(amountVND);
    console.log(
      `You have just changed ${amountVND} VND to ${formatCurrency("USD", returnedFromFunctionCall)} USD.`)
  };

} else if (currency === 'USD') {
  let amountUsd = prompt("USD to VND --- How much USD you wannt change?");
  if (isNaN(amountUsd)) {
    console.log("You did not type a number");
  } else {
    const returnedFromFunctionCall = usdToVnd(amountUsd);
    console.log(
      `You have just changed ${amountUsd} USD to ${formatCurrency("VND", returnedFromFunctionCall)} VND.`)
  };

} else {
  console.log("we dont have that currency ")
}








function formatCurrency(type, value) {
  const formatter = new Intl.NumberFormat(type, {
    currency: type,
    style: "currency"
  });
  return formatter.format(value);
}