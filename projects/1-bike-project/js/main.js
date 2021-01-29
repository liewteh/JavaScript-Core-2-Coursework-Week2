// Part 1
let blueButton = document.getElementById('blueBtn');
let orangeButton = document.getElementById('orangeBtn');
let greenButton = document.getElementById('greenBtn');

// Blue Button style on click
blueButton.addEventListener('click', function () {
    document.getElementsByClassName('jumbotron')[0].style.backgroundColor = '#588fbd';
    document.getElementsByClassName('btn btn-primary btn-lrg')[0].style.backgroundColor = '#ffa500';
    document.getElementsByClassName('btn btn-secondary btn-lrg')[0].style.backgroundColor = 'black';
    document.getElementsByClassName('btn btn-secondary btn-lrg')[0].style.color = 'white';
});

// Orange Button style on click
orangeButton.addEventListener('click', function () {
    document.getElementsByClassName('jumbotron')[0].style.backgroundColor = '#f0ad4e';
    document.getElementsByClassName('btn btn-primary btn-lrg')[0].style.backgroundColor = '#5751fd';
    document.getElementsByClassName('btn btn-secondary btn-lrg')[0].style.backgroundColor = '#31b0d5';
    document.getElementsByClassName('btn btn-secondary btn-lrg')[0].style.color = 'white';
});

// Green Button style on click
greenButton.addEventListener('click', function () {
    document.getElementsByClassName('jumbotron')[0].style.backgroundColor = '#87ca8a';
    document.getElementsByClassName('btn btn-primary btn-lrg')[0].style.backgroundColor = '#black';
    document.getElementsByClassName('btn btn-secondary btn-lrg')[0].style.backgroundColor = '#8c9c08';
});

// Part 2
let submitButton = document.getElementById('submitBtn');
let formControl = document.getElementsByClassName('form-control');
let email = document.getElementById('exampleInputEmail1');
let submit = '';

function validateEmail() {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)) {
        submit = true;
    }
    submit = false;
}

console.log(submit);

function checkField(evt) {
    evt.preventDefault();

    validateEmail(email);

    for (let field of formControl) {
        if (field.value.length === 0) {
            formControl.style.backgroundColor = 'red';
        }
    }

submitButton.addEventListener('click', function (evt))