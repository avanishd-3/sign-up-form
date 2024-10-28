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
function addHyphentoPhoneNumber() {
    var _a;
    (_a = document.getElementById("phone-number")) === null || _a === void 0 ? void 0 : _a.addEventListener("input", function (event) {
        var phoneNumber = event.target.value.replace(/-/g, '').replace(/\D/g, ''); // Remove existing hyphens and non-numeric characters
        // Add hyphens every 3 characters
        var formattedPhoneNumber = "";
        for (var i = 0; i < phoneNumber.length; ++i) {
            if (i === 3 || i === 6) {
                formattedPhoneNumber += "-";
            }
            formattedPhoneNumber += phoneNumber[i];
        }
        event.target.value = formattedPhoneNumber;
    });
}
function validatePasswordEqualsConfirmPassword() {
    var passwordInput = document.getElementById("password");
    var confirmPasswordInput = document.getElementById("confirm-password");
    var passwordValidationWarning = document.getElementById("password-matching-warning");
    if ((passwordInput === null || passwordInput === void 0 ? void 0 : passwordInput.value) === (confirmPasswordInput === null || confirmPasswordInput === void 0 ? void 0 : confirmPasswordInput.value)) {
        passwordValidationWarning.textContent = "";
    }
    else {
        passwordValidationWarning.textContent = "*Passwords do not match";
    }
}
// Main
addHyphentoPhoneNumber();
