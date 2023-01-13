const billAmount = document.querySelector("#bill-Amount")
const cashGiven = document.getElementById("Cash-Given");
const btn = document.getElementById("btn");
const errorMessage = document.getElementById("error-Message")
const noOfNotes = document.querySelectorAll(".no-of-notes")

const availableNotes = [2000 ,500 , 100, 20, 10 , 5, 1]

btn.addEventListener("click", function ValidCashGiven(){
  console.log(billAmount.value)
  errorMessage.style.display="none";
  if (billAmount.value > 0 ){
      if (cashGiven.value >= billAmount.value){
      
          const amountToBeReturned = cashGiven.value - billAmount.value;
          calculateChange(amountToBeReturned)
          
    }else{
      showMessage("you need to give more cash")
    }
  }else{
    showMessage("Bill amount should be more than 0")
  }
});


function calculateChange(amountToBeReturned){
  for(let i =0; i< availableNotes.length; i++){
    const numberofNotes = Math.trunc(amountToBeReturned/availableNotes[i]);
    amountToBeReturned %= availableNotes[i];
    noOfNotes[i].innerHTML = numberofNotes;
  }
}

function showMessage(errormsg){
  errorMessage.style.display="block";
    errorMessage.innerText = errormsg;
}

