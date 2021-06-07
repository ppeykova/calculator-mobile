"use strict";

function CalcModel() {
    let display = 0;
    let amount = 0;
    let c = "";
    let p = 1;
    let currVisit = "";
    let currHome = "";
    let bankFee = 0;
    let rate = null;
    let newRate = null;

    let updateCurrencyRate = function () {
        let http;
        let parser = new DOMParser();
        let i = null;
        let xmldoc = null;
        let allCurrencyRates = null;
        if (newRate !== null) {
            http = new XMLHttpRequest();
            http.open('GET', 'https://devweb2019.cis.strath.ac.uk/~aes02112/ecbxml.php', true);
            http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            http.onreadystatechange = function () {
                if(http.readyState === 4 && http.status === 200){
                    xmldoc = parser.parseFromString(http.responseText, "text/xml");
                    allCurrencyRates = xmldoc.getElementsByTagName("Cube");
                    for (i = 2; i < allCurrencyRates.length; i++) {
                        localStorage.setItem(allCurrencyRates[i].getAttribute("currency"), allCurrencyRates[i].getAttribute("rate"));
                    }
                    newRate(localStorage.getItem(allCurrencyRates[i-1].getAttribute("currency")));
                }
            };
            http.send();
        }
    };

    this.setNewCurrency = function (callback) {
        newRate = callback;
        updateCurrencyRate();
    };

    this.setRate = function (currRate) {
        rate = currRate;
    };

    this.calculate = function () {
        display = document.getElementById("result").value;
        amount = display.slice(- display.length, - 3);
        c = display.substr(display.length - 3);
        currVisit = localStorage.getItem('visiting');
        currHome = localStorage.getItem('home');
        bankFee = Number(localStorage.getItem('bankFee'));

        if(currHome !== "EUR" && currVisit === "EUR") {
            if(amount !== 1) {
                amount = amount / Number(localStorage.getItem(currHome));
                let totalFee = p + bankFee/100;
                amount = Math.round(amount*totalFee);
            }
            c = currVisit;
        } else if(currHome === "EUR" && currVisit !== "EUR") {
            if(amount !== 1) {
                amount = amount * Number(localStorage.getItem(currVisit));
                let bankTotalFee = p + bankFee/100;
                amount = Math.round(amount*bankTotalFee);
            }
            c = currVisit;
        } else if(currHome !== "EUR" && currVisit !== "EUR"){
            if(amount !== 1) {
                amount = amount / Number(localStorage.getItem(currHome));
                amount = amount * Number(localStorage.getItem(currVisit));
                let bankTotalFee = p + bankFee / 100;
                amount = Math.round(amount * bankTotalFee);
            }
            c = currVisit;
        }
    };

    this.converted = function () {
        display = amount + " " + c;
        return display;
    };


}