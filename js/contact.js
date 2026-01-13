
const inputFields = document.getElementsByClassName("form-input")

function clearInputForm(inputFields){

    for (let i = 0; i < inputFields.length; i++){
        inputFields[i].value = "";
    }
}

// Handles back/forward arrows and reloading. Must use anonymous function to
// have arguments to prevent reloading elements every time a reload is called.
window.addEventListener("DOMContentLoaded", function() {clearInputForm(inputFields)});
window.addEventListener("pageshow", function() {clearInputForm(inputFields)});
