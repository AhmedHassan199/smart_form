document.getElementById('loginForm').addEventListener('submit', function(event) {{
    event.preventDefault();
    var userEmail = emailElement.value;
    var userPassword = passwordElement.value;
    var foundUser = findUserByEmailAndName(userEmail, userName = null ,userPassword , "login");
    if (foundUser) {
        authUserName =foundUser.user_name;
        localStorage.setItem('auth_user_email', authUserName);
        window.location.href = './home.html';
    }else{
    Swal.fire("please check password or email to login");

    }
}});
