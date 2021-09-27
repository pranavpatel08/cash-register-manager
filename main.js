const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const changeTable = document.querySelector(".change-table");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateBillAndCashAmount() {
  hideMessage();
  if (billAmount.value > 0) {
    if (cashGiven.value >= billAmount.value) {
      const amountToBeReturned = cashGiven.value - billAmount.value;
      showMessage("return: " + amountToBeReturned);
      calculateChange(amountToBeReturned);
    } else {
        changeTable.style.display = "none";
      showMessage("bruhhh you wanna buy or no?");
    }
  } else {
    changeTable.style.display = "none";
    showMessage("Invalid Bill Amount");
  }
});

function calculateChange(amountToBeReturned) {

    changeTable.style.display = "table";
    for (let i = 0; i < availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);

        amountToBeReturned = amountToBeReturned % availableNotes[i];

        noOfNotes[i].innerText = numberOfNotes;
    }
}

function hideMessage() {
  message.style.display = "none";
}

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}
