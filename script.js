function ruleDialog() {
    let status = document.getElementById('content').style.display;
    if (status === 'none') {
        document.getElementById('content').style.display = 'block';
    } else {
        document.getElementById('content').style.display = 'none';
    }
}

let totalCoins = 50;

function getRandomInt(min, max) {
    return min + Math.floor(Math.random() * Math.floor(max - min + 1));
}

let dice = document.querySelectorAll('.dice img');

function rollAnimals() {
    dice.forEach(function (die) {
        die.classList.add('shake');
    });
    setTimeout(function () {
        dice.forEach(function (die) {
            die.classList.remove('shake');
        });
        let animals = ['./assets/1-cop.jpg', './assets/2-bau.jpg', './assets/3-ga.jpg', './assets/4-tom.jpg', './assets/5-ca.jpg', './assets/6-cua.jpg'];
        let a = document.getElementById('dice1').src = animals[getRandomInt(0, 5)];
        let b = document.getElementById('dice2').src = animals[getRandomInt(0, 5)];
        let c = document.getElementById('dice3').src = animals[getRandomInt(0, 5)];
        getCoins(a, b, c, animals);
    }, 1000);
}

function getCoins(a, b, c, animals) {
    let choice1 = +document.getElementById('number1').value;
    let choice2 = +document.getElementById('number2').value;
    let choice3 = +document.getElementById('number3').value;
    let choice4 = +document.getElementById('number4').value;
    let choice5 = +document.getElementById('number5').value;
    let choice6 = +document.getElementById('number6').value;
    let choices = [choice1, choice2, choice3, choice4, choice5, choice6];
    let coins = 0;
    let result = [];
    result.push(a, b, c);
    for (let i = 0; i < choices.length; i++) {
        if (choices[i] > 0 && (result.indexOf(animals[i]) === -1)) {
            coins -= choices[i];
        }
    }
    for (let i = 0; i < 3; i++) {
        switch (result[i]) {
            case (animals[0]):
                coins += choice1;
                break;
            case (animals[1]):
                coins += choice2;
                break;
            case (animals[2]):
                coins += choice3;
                break;
            case (animals[3]):
                coins += choice4;
                break;
            case (animals[4]):
                coins += choice5;
                break;
            case (animals[5]):
                coins += choice6;
                break;
        }
    }
    totalCoins += coins;
    if (totalCoins < 10) {
        notifyBox();
        totalCoins = 0;
        document.querySelector('.btn').disabled = true;
        resetCoins();
    }
    document.getElementById('totalCoins').innerHTML = totalCoins;
}

function notifyBox() {
    document.querySelector('.notify p').style.display = 'block';
}

function resetCoins() {
    let reset = document.querySelectorAll('form input');
    for (let i = 0; i < reset.length; i++) {
        reset[i].value = 0;
    }
}

function recharge() {
    totalCoins += 10;
    document.getElementById('totalCoins').innerHTML = totalCoins;
    document.querySelector('.notify p').style.display = 'none';
    document.querySelector('.btn').disabled = false;
}

function increaseValue(number) {
    let value = parseInt(document.getElementById(number).value, 10);
    if (totalCoins > value) {
        value = isNaN(value) ? 0 : value;
        value += 10;
        document.getElementById(number).value = value;
    }

}

function decreaseValue(number) {
    let value = parseInt(document.getElementById(number).value, 10);
    value = isNaN(value) ? 0 : value;
    value -= 10;
    value < 0 ? value = 0 : '';
    document.getElementById(number).value = value;
}



