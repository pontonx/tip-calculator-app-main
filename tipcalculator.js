var tipNumber = 0.15;

function Oblicz(){
    var bill = document.getElementById("Bill").value;
    var people = document.getElementById("People").value;
    var tipAmount = document.getElementById("tipAmount");
    var totalAmount = document.getElementById("Total");

    if(people !=0 && bill!=null){
        var tip = bill * tipNumber;
        tipAmount.innerHTML = "$"+Math.floor((tip/people)*100)/100;

        var total = parseFloat(bill) + tip;
        totalAmount.innerHTML = "$"+ Math.round((total/people)*100)/100;
    } else {
        tipAmount.innerHTML = "$0.00";
        totalAmount.innerHTML = "$0.00";
    }

    if(people == 0) {
        document.getElementById("People").style.border = "2px solid #b77f70";
        document.getElementById("zero").innerHTML = "Can't be zero";
    } else {
        document.getElementById("People").style.border = "2px solid transparent";
        document.getElementById("zero").innerHTML = "";
    }

    setInterval(Oblicz, 1000);
}

var allBtn = document.querySelectorAll('.tip');

allBtn.forEach(btn => {
    btn.style.background = "#00474b";
    btn.addEventListener("click", function() {
        allBtn.forEach(button => {
            button.style.background = "#00474b";
        });
        btn.style.background = "#26c2ad";
        tipNumber = btn.innerHTML;
        parseFloat(tipNumber);
        tipNumber = tipNumber/100;
        console.log(tipNumber);
    });
});

function Custom(){
    var customBtn = document.getElementById("custom").value;

    tipNumber = customBtn;
    parseFloat(tipNumber);
    tipNumber = tipNumber/100;
    console.log(tipNumber);

    allBtn.forEach(button => {
        button.style.background = "#00474b";
    });
}

function Reset() {
    allBtn.forEach(button => {
        button.style.background = "#00474b";
    });
    tipNumber = 0.15;
    document.getElementById("Bill").value = "0";
    document.getElementById("People").value = "0";
}