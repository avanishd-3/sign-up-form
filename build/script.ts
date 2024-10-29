function togglePasswordVisibility(): void {
  let passwordInput: null | HTMLInputElement = document.getElementById("password") as HTMLInputElement;
  let confirmPasswordInput: null | HTMLInputElement = document.getElementById("confirm-password") as HTMLInputElement;

  let toggleIcon: null | HTMLOrSVGImageElement = document.getElementById("toggle-icon") as HTMLOrSVGImageElement | null;

  if (passwordInput && toggleIcon) {
    if(passwordInput.type === "password") {
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

function addHyphentoPhoneNumber(): void {
  document.getElementById("phone-number")?.addEventListener("input", (event: Event) => {
    let phoneNumber: null | string = (event.target as HTMLInputElement).value.replace(/-/g, '').replace(/\D/g, ''); 
    // Remove existing hyphens and non-numeric characters

    // Add hyphens every 3 characters
    let formattedPhoneNumber: string = "";
    for (let i: number = 0; i < phoneNumber.length; ++i) {
      if (i === 3 || i === 6) {
        formattedPhoneNumber += "-";
      }
      formattedPhoneNumber += phoneNumber[i];
    }
    (event.target as HTMLInputElement).value = formattedPhoneNumber;
  });
}

function validatePasswordEqualsConfirmPassword(): void {
  let passwordInput: null | HTMLInputElement = document.getElementById("password") as null | HTMLInputElement;
  let confirmPasswordInput: null | HTMLInputElement = document.getElementById("confirm-password") as null | HTMLInputElement;

  let passwordValidationWarning: null | HTMLParagraphElement = document.getElementById("password-matching-warning") as HTMLParagraphElement;


  if (passwordInput?.value === confirmPasswordInput?.value) {
    passwordValidationWarning.textContent = "";
  }
  else {
    passwordValidationWarning.textContent = "*Passwords do not match";
  }
}

  // Main
addHyphentoPhoneNumber();