window.addEventListener('DOMContentLoaded', function(){
    let b=document.querySelector(".buttonPlace");
    b.addEventListener("click", calc);
    document.getElementById("typ").addEventListener("click", hid);
});

function calc(){
    var firstNumber, secondNumber, result;
    firstNumber = document.querySelector('.firstNumber').value;
    firstNumberCheck = parseInt(firstNumber);
  
    secondNumber = document.querySelector('.secondNumber').value;
    secondNumberCheck = parseInt(secondNumber);
    
    if(firstNumber!=firstNumberCheck || secondNumberCheck!=secondNumber || firstNumberCheck<0 || secondNumberCheck<0){
        alert('ОшИбКа)))))');
        document.querySelector('.resultPlace').innerHTML = "";
    } else{
        result = firstNumber*secondNumber;
        document.querySelector('.resultPlace').innerHTML = result;
    }
}



function hid() {
    let type;
    type = document.getElementById('typ').value;
    switch (type) {
        case'1':
            document.getElementById("radio").hidden = true;
            document.getElementById("checkbox").hidden = true;
            break;
        case'2':
            document.getElementById("radio").hidden = false;
            document.getElementById("checkbox").hidden = true;
            break;
        case'3':
            document.getElementById("radio").hidden = true;
            document.getElementById("checkbox").hidden = false;
            break;
    }
}

function calculate2() {
    let type, count, checkbox, radio, res;
    var rate, chec = 0;
    type = document.getElementById('typ').value;
    count = document.getElementById('county').value;
    checkbox = document.getElementsByName('checkbox');
    radio = document.getElementsByName('radio');
    count = parseInt(count);

    if (!(Number.isInteger(type) && Number.isInteger(count)) && !(count > 0 && count < 10000)) {
    } else {
        for (var i = 0; i < radio.length; i++) {
            if (radio[i].checked) {
                rate = radio[i].value;
            }
        }
        for (var i = 0; i < checkbox.length; i++) {
            if (checkbox[i].checked) {
                chec += checkbox[i].value;
            }
        }
        switch (type) {
            case '1':
                res = count * 100;
                break;
            case '2':
                if (rate == 1) {
                    res = count * 300;
                }
                if (rate == 2) {
                    res = count * 150;
                }
                break;
            case '3':
                if (chec == 0) {
                    res = count * 150;
                }
                if (chec == 1) {
                    res = count * 1000;
                }
                if (chec == 2) {
                    res = count * 10;
                }
                if (chec == 12) {
                    res = count * (10 + 1000);
                }
                break;
        }
        document.getElementById('result').innerHTML = "Стоимость: " + res + " руб.";
    }
}
