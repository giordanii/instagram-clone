const submitButton = document.getElementById("submit");
const inputPass = document.getElementById("pass");

inputPass.addEventListener("keyup", (e) => {
    const valuePass = e.currentTarget.value;
    if (valuePass.length > 6) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
});
