function showPassword(): void {
    let passwordInput: null | HTMLInputElement = document.getElementById("password") as HTMLInputElement;
    let confirmPasswordInput: null | HTMLInputElement = document.getElementById("confirm-password") as HTMLInputElement;

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }

    if (confirmPasswordInput.type === "password") {
      confirmPasswordInput.type = "text";
  } else {
    confirmPasswordInput.type = "password";
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