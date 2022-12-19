document.getElementById("loan-form").addEventListener("submit",function(e){
    document.getElementById("result").style.display="none";
    document.getElementById("loading").style.display="block";
    setTimeout(calculate,2000);
    e.preventDefault();
});

function calculate(e){
const amount =document.getElementById("loan_amount");
const intrest =document.getElementById("intrest");
const years =document.getElementById("years");
const monthlypayment =document.getElementById("monthly_payment");
const totalAmount =document.getElementById("total_amount");
const totalIntrest =document.getElementById("total_intrest");

const principal = parseFloat(amount.value);
const calculatedIntrest = parseFloat(intrest.value) / 100 /12;
const calculatedPayments = parseFloat(years.value) * 12;
const x = Math.pow(1 + calculatedIntrest,calculatedPayments);

const monthly =(principal * x * calculatedIntrest)/(x - 1);

if(isFinite(monthly)){
    monthlypayment.value = monthly.toFixed(2);
    totalAmount.value = (monthly * calculatedPayments).toFixed(2);
    totalIntrest.value = (monthly * calculatedPayments - principal).toFixed(2);

    document.getElementById("results").style.display="block";
    document.getElementById("loading").style.display="none";

}
else{
    showAlert("please enter the values");
}
e.preventDefault();
}
function showAlert (error){
const errorDiv = document.createElement("div");
errorDiv.appendChild(document.createTextNode(error));
errorDiv.className = "alert alert-danger";
const card = document.querySelector(".card");
const heading = document.querySelector(".heading");

card.insertBefore(errorDiv,heading);
setTimeout(function()
{
    document.querySelector(".alert").remove();

},3000);
}
