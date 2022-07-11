const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password")
const matchText = document.querySelector(".match-text")
console.log(matchText);



confirmPassword.addEventListener("keyup", function (e) {
    if (password.value === confirmPassword.value) {
        matchText.style.opacity = 0;
        password.classList.remove("error");
        confirmPassword.classList.remove("error");
        confirmPassword.setCustomValidity("");
        password.setCustomValidity("");
    }
    else {
        matchText.style.opacity = 1;
        password.classList.add("error");
        confirmPassword.classList.add("error");
        confirmPassword.setCustomValidity('Passwords must be same');
    }
})

