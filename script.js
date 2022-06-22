const input = document.querySelector(".password input");
const eye = document.querySelector(".password .fa-eye-slash");
const lock = document.querySelector(".password .fa-lock");

eye.addEventListener("click", () => {

    if (input.type === "password") {
        input.type = "text";
        eye.classList.remove("fa-eye-slash");
        eye.classList.add("fa-eye");
        setTimeout(() => {
            lock.getElementsByClassName.color = "#111625";
        }, 500);
        
    } else {
        input.type = "password";
        eye.classList.remove("fa-eye-slash");
        eye.classList.add("fa-eye");
        lock.style.color = "dbdbdb";
    }
});