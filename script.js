const formEl = document.getElementById('form'),
    firstName = document.getElementById('first-name'),
    lastName = document.getElementById('last-name'),
    emailEl = document.getElementById('email'),
    userNameEl = document.getElementById('username'),
    phoneEl = document.getElementById('phone'),
    passwordEl = document.getElementById('password1'),
    confPasswordEl = document.getElementById('password2');
// formGroup = document.querySelectorAll('.form-group'),

// show error function
function showError(input, message) {
    const formGroup = input.parentElement;
    formGroup.className = 'form-group showError';
    const small = formGroup.querySelector('small');
    console.log(small);
    small.innerText = message;
}
// showSuccess form

function showSuccess(input) {
    const formGroup = input.parentElement;
    formGroup.className = 'form-group showSuccess';
}
formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const firstNameVal = firstName.value;
    const lastNameVal = lastName.value;
    const emailVal = emailEl.value;
    const usernameVal = userNameEl.value;
    const phoneVal = phoneEl.value;
    const passwordVal = passwordEl.value;
    const confPassVal = confPasswordEl.value;
    // Values of inputs

    // first name regex
    const NameReg = /([A-Z]+(['|\-|\s]?[A-Za-z]+)*)+/;
    if (firstNameVal === '') {
        showError(firstName, 'Please enter your first name')
    } else if (!firstNameVal.match(NameReg)) {
        showError(firstName, 'First name must be start with capital letters or words (numbers not allowed)')
    } else if (firstNameVal.length < 4) {
        showError(firstName, 'Name must be 8 character')
    } else {
        showSuccess(firstName)
    }

    // Last name regex

    if (lastNameVal === '') {
        showError(lastName, 'Please enter your last name')
    } else if (!lastNameVal.match(NameReg)) {
        showError(lastName, 'Last name must be start with capital letters or words (numbers not allowed)')
    } else if (lastNameVal.length < 4) {
        showError(lastName, 'Name must be 8 character')
    } else {
        showSuccess(lastName)
    }

    // Email regex
    const emailReg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (emailVal === '') {
        showError(emailEl, 'Please enter your email');
    } else if (!emailVal.match(emailReg)) {
        showError(emailEl, 'Invalid email address')
    } else {
        showSuccess(emailEl)
    }

    // User name regex 
    const usernameRegex = /^([a-zA-Z0-9]+\d)+$/;

    if (usernameVal === '') {
        showError(userNameEl, 'Please enter your username')
    } else if (!usernameVal.match(usernameRegex)) {
        showError(userNameEl, 'User name must contain character and number')
    } else {
        showSuccess(userNameEl)
    }

    // Phone number regex 
    const phoneReg = /^\+88|008801[0-9]{9}/;

    if (phoneVal === '') {
        showError(phoneEl, 'Please enter your Phone No.')
    } else if (!phoneVal.match(phoneReg)) {
        showError(phoneEl, 'Phone number is not valid')
    } else {
        showSuccess(phoneEl)
    }

    // password regex regex
    const passwordReg = ("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

    if (passwordVal === '') {
        showError(passwordEl, 'Please enter your password')
    } else if (!passwordVal.match(passwordReg)) {
        showError(passwordEl, 'Password is not valid')
    } else {
        showSuccess(passwordEl)
    }

    // confirm password validation
    if (confPassVal === '') {
        showError(confPasswordEl, 'Please enter your confirm password');
    } else if (confPassVal !== passwordVal) {
        showError(confPasswordEl, 'Password did not matched!')
    } else {
        showSuccess(confPasswordEl)
    }
})