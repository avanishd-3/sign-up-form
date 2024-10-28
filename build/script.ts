function showPassword() {
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


  function addHyphentoPhoneNumber() {
    document.getElementById("phone-number")?.addEventListener("input", (event: Event) => {
      let phoneNumber: string = (event.target as HTMLInputElement).value.replace(/-/g, '').replace(/\D/g, ''); // Remove existing hyphens and non-numeric characters

      // Add hyphens every 3 characters
      let formattedPhoneNumber = "";
      for (let i = 0; i < phoneNumber.length; ++i) {
        if (i === 3 || i === 6) {
          formattedPhoneNumber += "-";
        }
        formattedPhoneNumber += phoneNumber[i];
      }
      (event.target as HTMLInputElement).value = formattedPhoneNumber;
    });
  }

  // Main
  addHyphentoPhoneNumber();
  