var checkAuthUser = localStorage.getItem('auth_user_email') || null;
function handleLogout(event) {
    event.preventDefault();
    localStorage.removeItem('auth_user_email');
    window.location.href = './index.html';
}
function handlePageLoad(){
    if( checkAuthUser == null ){
    window.location.href = './index.html';
    Swal.fire("login to go to home page please");

    }
}
element =  document.getElementById('home');
element.innerHTML = ` Welcome to our website <span  style = "color : red"> ${checkAuthUser} <span>`
document.getElementById('logout-link').addEventListener('click', handleLogout);
window.onload = handlePageLoad;
