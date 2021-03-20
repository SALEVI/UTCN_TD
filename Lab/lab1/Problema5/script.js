// PLUS ( + )
plus = document.getElementById('plus');

function plusOp(){

    let numar1 = document.getElementById('numar1');
    let numar2 = document.getElementById('numar2');

    let sum = parseInt(numar1.value) + parseInt(numar2.value);

    $('#result').html(sum);
}

plus.addEventListener('click', plusOp);

// MINUS ( - )
minus = document.getElementById('minus');

function minusOp(){

    let numar1 = document.getElementById('numar1');
    let numar2 = document.getElementById('numar2');

    let sum = parseInt(numar1.value) - parseInt(numar2.value);

    $('#result').html(sum);
}

minus.addEventListener('click', minusOp);

// MULTIPLY ( * )
multiply = document.getElementById('multiply');

function multiplyOp(){

    let numar1 = document.getElementById('numar1');
    let numar2 = document.getElementById('numar2');

    let sum = parseInt(numar1.value) * parseInt(numar2.value);

    $('#result').html(sum);
}

multiply.addEventListener('click', multiplyOp);

// DIVIDE ( / )
divide = document.getElementById('divide');

function divideOp(){

    let numar1 = document.getElementById('numar1');
    let numar2 = document.getElementById('numar2');

    let sum = parseInt(numar1.value) / parseInt(numar2.value);

    $('#result').html(sum);
}

divide.addEventListener('click', divideOp);

// MOD ( % )
mod = document.getElementById('mod');

function modOp(){

    let numar1 = document.getElementById('numar1');
    let numar2 = document.getElementById('numar2');

    let sum = parseInt(numar1.value) % parseInt(numar2.value);

    $('#result').html(sum);
}

mod.addEventListener('click', modOp);