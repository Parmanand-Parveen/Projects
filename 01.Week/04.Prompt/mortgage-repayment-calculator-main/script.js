let Amount = document.getElementById("amount");
let Time = document.getElementById("time");
let Rate = document.getElementById("rate");
let Result = document.getElementById("result");
let total_repayment = document.getElementById("total_repayment");
let clears = document.getElementById("clear");

console.log(Amount.value);

function getpayment() {
  let amount = Amount.value;
  let time = Time.value * 12;
  let rate = Rate.value / 100 / 12;

  let m =
    [amount * rate * Math.pow(1 + rate, time)] / (Math.pow(1 + rate, time) - 1);
  Result.value = m.toFixed(2);

  let payment = m * Time.value * 12;

  total_repayment.value = payment.toFixed(2);
}

clears.addEventListener("click", clear);

function clear() {
  Amount.value = "";
  Time.value = "";
  Rate.value = "";
  Result.value = "";
  total_repayment.value = "";
  console.log("clear");
}
