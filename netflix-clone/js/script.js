/* ==========================================================================
   MOVIETIME - SIGNUP FORM VALIDATION SCRIPT
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  const modalOverlay = document.getElementById("registration-modal");
  const openModalBtns = document.querySelectorAll(".js-open-registration");
  const closeModalBtn = document.getElementById("close-modal-btn");
  const registrationForm = document.getElementById("registration-form");

  // Open Modal Event Listeners
  openModalBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      // Pre-fill email if passed from hero form
      const heroEmailInput = document.getElementById("hero-email");
      const regEmailInput = document.getElementById("reg-email");
      if (heroEmailInput && heroEmailInput.value && regEmailInput) {
        regEmailInput.value = heroEmailInput.value;
      }
      modalOverlay.classList.add("modal-overlay--active");
      document.body.style.overflow = "hidden";
    });
  });

  // Close Modal Event Listener
  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", function () {
      modalOverlay.classList.remove("modal-overlay--active");
      document.body.style.overflow = "";
    });
  }

  // Close Modal on Background Click
  if (modalOverlay) {
    modalOverlay.addEventListener("click", function (e) {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove("modal-overlay--active");
        document.body.style.overflow = "";
      }
    });
  }

  // Handle Form Submission with Validation
  if (registrationForm) {
    registrationForm.addEventListener("submit", function (e) {
      e.preventDefault();
      if (validateForm()) {
        // Collect user data
        const userData = {
          firstName: document.getElementById("reg-first-name").value.trim(),
          lastName: document.getElementById("reg-last-name").value.trim(),
          username: document.getElementById("reg-username").value.trim(),
          email: document.getElementById("reg-email").value.trim()
        };
        
        // Mock API: Register user (defined in auth.js)
        if (typeof registerUser === 'function') {
          registerUser(userData);
        } else {
          // Fallback if auth.js is not loaded
          localStorage.setItem('movieTime_user', JSON.stringify(userData));
          localStorage.setItem('movieTime_loggedIn', 'true');
        }

        const successMsg = document.getElementById("reg-success-msg");
        if (successMsg) {
          successMsg.style.display = "block";
          registrationForm.reset();
          setTimeout(() => {
            window.location.href = "browse.html";
          }, 1500);
        } else {
          window.location.href = "browse.html";
        }
      }
    });
  }
});

/**
 * Validates all fields of the MovieTime SignUp Form
 * @returns {boolean} - true if all fields pass validation, false otherwise
 */
function validateForm() {
  let isValid = true;

  // Retrieve input elements
  const firstName = document.getElementById("reg-first-name");
  const lastName = document.getElementById("reg-last-name");
  const username = document.getElementById("reg-username");
  const email = document.getElementById("reg-email");
  const password = document.getElementById("reg-password");
  const mobile = document.getElementById("reg-mobile");

  // Helper to display error message
  function setError(input, message) {
    const errorSpan = document.getElementById(input.id + "-error");
    if (errorSpan) {
      errorSpan.textContent = message;
      errorSpan.style.display = "block";
    }
    input.classList.add("form-group__input--error");
    isValid = false;
  }

  // Helper to clear error message
  function clearError(input) {
    const errorSpan = document.getElementById(input.id + "-error");
    if (errorSpan) {
      errorSpan.textContent = "";
      errorSpan.style.display = "none";
    }
    input.classList.remove("form-group__input--error");
  }

  // Reset all previous error states
  [firstName, lastName, username, email, password, mobile].forEach((input) => {
    if (input) clearError(input);
  });

  // Rule 1: First Name (alphabets characters only)
  const firstNameVal = firstName.value.trim();
  const alphaRegex = /^[A-Za-z]+$/;
  if (firstNameVal === "") {
    setError(firstName, "First Name cannot be empty.");
  } else if (!alphaRegex.test(firstNameVal)) {
    setError(firstName, "First Name must contain alphabetic characters only.");
  }

  // Rule 5: Last Name (alphabets characters only)
  const lastNameVal = lastName.value.trim();
  if (lastNameVal === "") {
    setError(lastName, "Last Name cannot be empty.");
  } else if (!alphaRegex.test(lastNameVal)) {
    setError(lastName, "Last Name must contain alphabetic characters only.");
  }

  // Rule 6: Username (max 10 characters, alphabets, numbers and symbols . _ @ # only)
  const usernameVal = username.value.trim();
  const usernameRegex = /^[a-zA-Z0-9._@#]+$/;
  if (usernameVal === "") {
    setError(username, "Username cannot be empty.");
  } else if (usernameVal.length > 10) {
    setError(username, "Username must not exceed 10 characters.");
  } else if (!usernameRegex.test(usernameVal)) {
    setError(username, "Username can only contain alphabets, numbers, and symbols (. _ @ #).");
  }

  // Rule 3: Email ID (standard pattern name@domain.com)
  const emailVal = email.value.trim();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(emailVal)) {
    setError(email, "Please enter a valid email address (e.g. name@domain.com).");
  }

  // Rule 2: Password (min 6 characters, min 1 uppercase, 1 symbol, 1 number)
  const passwordVal = password.value;
  const hasUppercase = /[A-Z]/.test(passwordVal);
  const hasNumber = /[0-9]/.test(passwordVal);
  const hasSymbol = /[^a-zA-Z0-9]/.test(passwordVal); // or /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/

  if (passwordVal.length < 6) {
    setError(password, "Password must be at least 6 characters in length.");
  } else if (!hasUppercase) {
    setError(password, "Password must contain at least 1 uppercase letter (A-Z).");
  } else if (!hasNumber) {
    setError(password, "Password must contain at least 1 number (0-9).");
  } else if (!hasSymbol) {
    setError(password, "Password must contain at least 1 special character/symbol.");
  }

  // Rule 4: Mobile Number (International phone format for all countries)
  const mobileVal = mobile.value.trim();
  // Validates international formats: optional +, digits, spaces, dashes, parentheses (7 to 15 digits total)
  const digitCount = mobileVal.replace(/\D/g, "").length;
  const internationalPhoneRegex = /^\+?[0-9\s\-()]{7,20}$/;

  if (mobileVal === "") {
    setError(mobile, "Mobile Number cannot be empty.");
  } else if (!internationalPhoneRegex.test(mobileVal) || digitCount < 7 || digitCount > 15) {
    setError(mobile, "Please enter a valid international mobile number (e.g. +1 555-123-4567 or +91 9876543210).");
  }

  return isValid;
}
