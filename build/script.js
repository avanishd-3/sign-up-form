function showPassword() {
    var passwordInput = document.getElementById("password");
    var confirmPasswordInput = document.getElementById("confirm-password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    }
    else {
        passwordInput.type = "password";
    }
    if (confirmPasswordInput.type === "password") {
        confirmPasswordInput.type = "text";
    }
    else {
        confirmPasswordInput.type = "password";
    }
}
