"use strict";

function updateDisplay(num) {
    let display = document.getElementById("result");
    let currHome = localStorage.getItem('home');

    if(display.value.substr(display.value.length - 3) !== currHome) {
        display.value = "0 " + currHome;
    }

    if(display.value.substr(display.value.length - 3) === currHome) {
        if(display.value === ("0" + " " + currHome)){
            display.value = num + " " + currHome;
        } else if(display.value.length < 12) {
            display.value = display.value.slice(- display.value.length, - 4) + num + " " + localStorage.getItem('home');
        }
    } else  {
        window.alert("Maximum number of digits has been exceeded. Please enter another input")
    }
}

function homeCurrency() {
    let home = document.getElementById("homeCurrency");
    localStorage.setItem('home', home.options[home.selectedIndex].id);
    home.options[home.selectedIndex].selected = "selected";
}

function visitingCurrency() {
    let visiting = document.getElementById("visitCurrency");
    localStorage.setItem('visiting', visiting.options[visiting.selectedIndex].id);
    visiting.options[visiting.selectedIndex].selected = "selected";
    clear();
}

function setBankFee0() {
    document.getElementById("fee0").checked = true;
    document.getElementById("fee2").checked = false;
    document.getElementById("fee4").checked = false;
    document.getElementById("fee6").checked = false;
    localStorage.setItem('bankFee', '0');
}

function setBankFee2() {
    document.getElementById("fee0").checked = false;
    document.getElementById("fee2").checked = true;
    document.getElementById("fee4").checked = false;
    document.getElementById("fee6").checked = false;
    localStorage.setItem('bankFee', '2');

}

function setBankFee4() {
    document.getElementById("fee0").checked = false;
    document.getElementById("fee2").checked = false;
    document.getElementById("fee4").checked = true;
    document.getElementById("fee6").checked = false;
    localStorage.setItem('bankFee', '4');

}

function setBankFee6() {
    document.getElementById("fee0").checked = false;
    document.getElementById("fee2").checked = false;
    document.getElementById("fee4").checked = false;
    document.getElementById("fee6").checked = true;
    localStorage.setItem('bankFee', '6');

}

function clear() {
    let display = document.getElementById("result");

    display.value = "0 " + localStorage.getItem('home');
}

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

function CalcView() {
    let display = document.getElementById("result");

    let seven = document.getElementById("seven");
    let eight = document.getElementById("eight");
    let nine = document.getElementById("nine");
    let four = document.getElementById("four");
    let five = document.getElementById("five");
    let six = document.getElementById("six");
    let one = document.getElementById("one");
    let two = document.getElementById("two");
    let three = document.getElementById("three");
    let zero = document.getElementById("zero");
    let c = document.getElementById("clear");
    let mainNav = document.getElementById('js-menu');
    let equals = document.getElementById("equals");

    let home = document.getElementById("homeCurrency");
    let visiting = document.getElementById("visitCurrency");
    let fee0 = document.getElementById("fee0");
    let fee2 = document.getElementById("fee2");
    let fee4 = document.getElementById("fee4");
    let fee6 = document.getElementById("fee6");



    this.changeDisplay = function() {
        one.addEventListener("click", function() {updateDisplay("1");});
        two.addEventListener("click", function() {updateDisplay("2");});
        three.addEventListener("click", function() {updateDisplay("3");});
        four.addEventListener("click", function() {updateDisplay("4");});
        five.addEventListener("click", function() {updateDisplay("5");});
        six.addEventListener("click", function() {updateDisplay("6");});
        seven.addEventListener("click", function() {updateDisplay("7");});
        eight.addEventListener("click", function() {updateDisplay("8");});
        nine.addEventListener("click", function() {updateDisplay("9");});
        zero.addEventListener("click", function() {updateDisplay("0");});

    };

    this.localStoreValue = function () {
        if (localStorage.getItem('home') === null) {
            localStorage.setItem('home', 'GBP');
        } else {
            home.options.namedItem(localStorage.getItem('home')).selected = "selected";
        }
        if(localStorage.getItem('visiting') === null ) {
            localStorage.setItem('visiting', 'EUR');
        } else {
            visiting.options.namedItem(localStorage.getItem('visiting')).selected = "selected";
        }

        if(localStorage.getItem('bankFee') === null) {
            localStorage.setItem('bankFee', '0');
        } else if(localStorage.getItem('bankFee') === '2') {
            setBankFee2();
        } else if(localStorage.getItem('bankFee') === '4'){
            setBankFee4();
        } else if(localStorage.getItem('bankFee') === '6') {
            setBankFee6();
        }
    };

    this.calculateV = function (calculateC) {
        equals.addEventListener("click", calculateC);
    };

    this.clear = function () {
        c.addEventListener("click", function () {clear();});
    };

    this.calDisplay = function (val) {
        display.value = val;
    };

    this.activeOpt = function () {
        home.addEventListener("change", function (){homeCurrency();});
        visiting.addEventListener("change", function (){visitingCurrency();});
        fee0.addEventListener("click", function () {setBankFee0();});
        fee2.addEventListener("click", function () {setBankFee2();});
        fee4.addEventListener("click", function () {setBankFee4();});
        fee6.addEventListener("click", function () {setBankFee6();});
    };

}

