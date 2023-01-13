const billAmount = document.getElementById("bill-Amount");
const cashGiven = document.getElementById("cash-Given");
const btn = document.getElementById("btn");
const errorMessage = document.getElementById("error-Message")

btn.addEventListener("click", function ValidCashGiven(){
  errorMessage.style.display="none";
  if (billAmount.value > 0 ){
    if (billAmount.value >= cashGiven.value){

    }else{

    }
  }else{
    
  }
});


function showMessage(){
  errorMessage.style.display="block";
    errorMessage.innerText = "the bill amount should be grater than 0";
}

