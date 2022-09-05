// For input fields
let billAmount = document.querySelector("#bill-amount");
let cashReceived = document.querySelector("#cash-received");
let errorMessageContainer = document.querySelector("#error");
let processButton = document.querySelector("#process-button");

processButton.addEventListener("click",process);

function process() {
  console.log(billAmount.value)
  console.log(cashReceived.value)
}
