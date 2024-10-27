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

  