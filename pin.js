document.getElementById("generatePin").addEventListener("click", function(){
    var generatePin = Math.round(Math.random()*9999);
    document.getElementById("generatePinShow").value = generatePin;
    
});



document.getElementById("submitBtn").addEventListener("click", function(){
    var generatePinShow = document.getElementById("generatePinShow");
    var calculatorDisplay = document.getElementById("calculatorDisplay");
    if (calculatorDisplay.value == "") {
        alert("At first create pin from generate pin, then type those pin and then click submit Button")
    }

     else if(generatePinShow.value == calculatorDisplay.value) {
       document.getElementById("pinMatch").style.display = "block";
    } else{
        document.getElementById("pinNotMatch").style.display = "block";
    }
});



document.getElementById("clearBtn").addEventListener("click", function () {
    var calculatorDisplay = document.getElementById("calculatorDisplay");
    calculatorDisplay.value = calculatorDisplay.value ="";
    document.getElementById("pinMatch").style.display = "none";
    document.getElementById("pinNotMatch").style.display = "none";
});



function deleteNumber() {
    var calculatorDisplay = document.getElementById("calculatorDisplay");
    calculatorDisplay.value = calculatorDisplay.value.slice(0, -1);
}







