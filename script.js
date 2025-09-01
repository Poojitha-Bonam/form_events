const form = document.getElementById("registerForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const genderSelect = document.getElementById("gender");
const successMsg = document.getElementById("successMsg");

// Error messages
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const genderError = document.getElementById("genderError");

// Input Event -> Real-time validation
nameInput.addEventListener("input", () => {
  if (nameInput.value.length < 3) {
    nameError.textContent = "Name must be at least 3 characters!";
  } else {
    nameError.textContent = "";
  }
});

// Blur Event -> Show warning if empty
emailInput.addEventListener("blur", () => {
  if (emailInput.value === "") {
    emailError.textContent = "Email is required!";
  }
});

// Focus Event -> Highlight password input
passwordInput.addEventListener("focus", () => {
  passwordInput.style.borderColor = "#28a745";
});

// Change Event -> Gender selection check
genderSelect.addEventListener("change", () => {
  if (genderSelect.value === "") {
    genderError.textContent = "Please select your gender!";
  } else {
    genderError.textContent = "";
  }
});

// Submit Event -> Validate before submission
form.addEventListener("submit", (e) => {
    e.preventDefault();  // Stop page reload
    let isValid = true;

    // Name validation
    if (nameInput.value.length < 3) {
        nameError.textContent = "Name must be at least 3 characters!";
        isValid = false;
    } else {
        nameError.textContent = "";
    }

    // Email validation
    if (!emailInput.value.includes("@")) {
        emailError.textContent = "Enter a valid email!";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    // Password validation
    if (passwordInput.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters!";
        isValid = false;
    } else {
        passwordError.textContent = "";
    }

    // Gender validation
    if (genderSelect.value === "") {
        genderError.textContent = "Please select your gender!";
        isValid = false;
    } else {
        genderError.textContent = "";
    }

    // Final check
    if (isValid) {
        // Show success alert
        alert("🎉 Registration Successful!");

        // Reset form after successful registration
        form.reset();
    }
});



// Reset Event -> Clear messages
form.addEventListener("reset", () => {
  successMsg.textContent = "";
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  genderError.textContent = "";
});
