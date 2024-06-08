var nameValidationMessage = document.getElementById('nameValidationMessage');
var emailValidationMessage = document.getElementById('emailValidationMessage');
var passwordValidationMessage = document.getElementById('passwordValidationMessage');
var validationResultName = false;
var validationResultPassword = false;
var validationResultEmail = false;

document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var userEmail = emailElement.value;
    var userPassword = passwordElement.value;
    var userName = userNameElement.value;
    
    var foundUser = findUserByEmailAndName(userEmail, userName , userPassword , 'signup');
    if (!validationResultName || !validationResultEmail || !validationResultPassword) {
        Swal.fire("Please validate your data first to register.");
        return;
    }
    if (foundUser) {
        Swal.fire("Data for this user already exists!");
        return;
    }
    var user = {
        user_name: userName,
        email: userEmail,
        password: userPassword,
    };
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    window.location.href = './index.html';
});



function validateInput(inputField, validationMessage) {
    var inputValue = inputField.value.trim();
    var isValid = false;
    var regex;
    var message;

    switch (inputField.name) {
        case 'password':
            regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
            message = "Invalid password. Password must contain at least one lowercase letter, one uppercase letter, one number, and be at least 8 characters long.";
            break;
        case 'name':
            regex = /^[a-zA-Z\s]+$/;
            message = "Invalid name. Name can contain only letters and spaces.";
            break;
        case 'email':
            regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
            message = "Invalid email address.";
            break;
        default:
            break;
    }

    isValid = regex.test(inputValue);
    if (!isValid) {
        validationMessage.style.display = 'block';
        inputField.classList.remove('is-valid');
        inputField.classList.add('is-invalid');
        validationMessage.textContent = message;
        return false;
    } else {
        validationMessage.style.display = 'none';
        inputField.classList.remove('is-invalid');
        inputField.classList.add('is-valid');
        return true;
    }
}

userNameElement.addEventListener('input', function() {
    validationResultName = validateInput(userNameElement, nameValidationMessage);
});

emailElement.addEventListener('input', function() {
    validationResultEmail = validateInput(emailElement, emailValidationMessage);
});

passwordElement.addEventListener('input', function() {
    validationResultPassword = validateInput(passwordElement, passwordValidationMessage);
});
