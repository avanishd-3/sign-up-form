"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.togglePasswordVisibility = togglePasswordVisibility;
exports.validatePasswordEqualsConfirmPassword = validatePasswordEqualsConfirmPassword;
// Imports
var intl_tel_input_1 = require("intl-tel-input");
require("intl-tel-input/build/css/intlTelInput.css");
function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var confirmPasswordInput = document.getElementById("confirm-password");
    var toggleIcon = document.getElementById("toggle-icon");
    if (passwordInput && toggleIcon) {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            confirmPasswordInput.type = "text";
            toggleIcon.textContent = "visibility";
        }
        else {
            passwordInput.type = "password";
            confirmPasswordInput.type = "password";
            toggleIcon.textContent = "visibility_off";
        }
    }
}
function addHyphentoPhoneNumber() {
    var _a;
    (_a = document.getElementById("phone-number")) === null || _a === void 0 ? void 0 : _a.addEventListener("input", function (event) {
        var phoneNumber = event.target.value.replace(/-/g, '').replace(/\D/g, '');
        // Remove existing hyphens and non-numeric characters
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
document.addEventListener("DOMContentLoaded", function () {
    var input = document.querySelector("#phone-number");
    if (input) {
        (0, intl_tel_input_1.default)(input, {
            initialCountry: "us",
            loadUtilsOnInit: "./node_modules/intl-tel-input/build/js/utils.js" // Correct path for utils.js
        });
    }
});
