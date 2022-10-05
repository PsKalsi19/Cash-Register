// For input fields
const billAmount = document.querySelector("#bill-amount");
const cashReceived = document.querySelector("#cash-received");
const cashReceivedContainer = document.querySelector('.cash-wrapper');
const errorMessageContainer = document.querySelector("#error");
const statusMessageContainer = document.querySelector("#status");
const processButton = document.querySelector("#process-button");
const notesHeadingRow = document.querySelector("#notes-headings");
const notesAmountBills = document.querySelector("#notes-amount-bills");
const notes = [2000, 500, 100, 20, 10, 5, 1]

billAmount.addEventListener("keyup", verifyBillAmount)
cashReceived.addEventListener("keyup", verifyCashReceived)
processButton.addEventListener("click", process);
// To dynamically generate table columns.
function fillTableData() {
  for (let i = 0; i < notes.length; i++) {
    // For heading of notes showing bill amount
    let notesHeading = document.createElement('th');
    notesHeadingRow.appendChild(notesHeading);
    notesHeading.innerText = notes[i];
    // For actual bills where number of notes will be shown after calculations
    let bills = document.createElement('td');
    notesAmountBills.appendChild(bills);
    bills.setAttribute('id', notes[i]);
  }
}

function verifyBillAmount() {
  if (!billAmount.value) {
    displayError('Please enter bill amount to proceed.');
    cashReceivedContainer.style.display = 'none'; //For bonus question
    return true
  }
  else if (Number(billAmount.value) <= 0) {
    displayError('Entered bill amount should be greater than 0');
    return true
  }
  else {
    errorMessageContainer.style.display = 'none'
    cashReceivedContainer.style.display = 'block';
    return false;
  }
}


function process() {
  if (verifyBillAmount() || verifyCashReceived()) {
    return
  }
  else {
    const amountToReturn = Number(cashReceived.value) - Number(billAmount.value);
      calculateAmount(amountToReturn)
  }
}

function verifyCashReceived() {
  if (Number(cashReceived.value) < Number(billAmount.value)) {
    displayError('Please Udhari na maange, hamne khud loan liya hua hai.')
    return true;
  }
  else {
    errorMessageContainer.style.display = 'none'
    return false;
  }
}


function calculateAmount(amountToReturn) {
  let noOfNotes = 0
  let totalNumberOfNotes=0
  for (let i = 0; i < notes.length; i++) {
    noOfNotes = Math.trunc(amountToReturn / notes[i]);
    document.getElementById(notes[i]).innerText = noOfNotes;
    totalNumberOfNotes=totalNumberOfNotes+noOfNotes;
    amountToReturn = amountToReturn % notes[i];
  }
  displayInfo(`Total number of notes to return: ${totalNumberOfNotes}`)
}


function displayError(errorMessage) {
  errorMessageContainer.innerText = errorMessage;
  errorMessageContainer.style.display = 'block'
  statusMessageContainer.style.display = 'none'
}
function displayInfo(statusMessage) {
  statusMessageContainer.innerText = statusMessage;
  statusMessageContainer.style.display = 'block'
  errorMessageContainer.style.display = 'none'
}

fillTableData()