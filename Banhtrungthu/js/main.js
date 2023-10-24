const inputUsername = document.querySelector(".input-login-username");
const inputPassword = document.querySelector(".input-login-password");
const btnLogin = document.querySelector(".login-signInButton");

btnLogin.addEventListener("click", (e) =>{
    e.preventDefault();
    if(inputUsername.value === "" || inputPassword.value === ""){
        alert("Vui lòng không để trống");
    } else {
        const user = JSON.parse(localStorage.getItem(inputUsername.value));
        if (
            user.username === inputUsername.value &&
            user.password === inputPassword.value
           ) {
            alert("Đăng nhập thành công");
            window.location.href = "indexBTT.html";
           } else {
            alert("Đăng nhập thất bại");
           }
        }
});