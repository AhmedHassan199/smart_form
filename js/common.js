var users = JSON.parse(localStorage.getItem('users')) || [];
var emailElement = document.getElementById('exampleInputEmail1');
var passwordElement = document.getElementById('exampleInputPassword1');
var userNameElement = document.getElementById('exampleInputName');


function findUserByEmailAndName(email, userName, userPassword, page) {
    return users.find(function(user) {
        if (page == 'signup') {
            return user.email === email || user.user_name === userName;
        } else {
            return user.email === email  && user.password === userPassword;
        }
    });
}