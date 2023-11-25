let allInputs = document.querySelectorAll("input");
let firstNameInput = document.querySelector("#first_name");
let lastNameInput = document.querySelector("#last_name");
let emailInput = document.querySelector("#email");
let phoneNumberInput = document.querySelector("#phone_number");
let passwordInput = document.querySelector("#password");
let passwordConfirmInput = document.querySelector("#password_confirmation");
let passwordError = document.querySelector("#password-error");

for (let i = 0; i < allInputs.length; i++) {
    allInputs[i].addEventListener("focus", function () {
        allInputs[i].style.outline = "none";
        allInputs[i].style.border = "2px solid blue";
    })

    allInputs[i].addEventListener("blur", function () {
        if (allInputs[i].matches(":valid")) {
            allInputs[i].style.border = "2px solid green";
        }
        if (allInputs[i].matches(":invalid")) {
            allInputs[i].style.border = "2px solid red";
        }

        if (passwordConfirmInput.value !== passwordInput.value) {
            passwordError.textContent = "Passwords do not match!";
            passwordError.style.color = "red";
        }
        else {
            passwordError.textContent = "";
        }
    })
}

