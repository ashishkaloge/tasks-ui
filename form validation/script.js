const submit = document.querySelector(".submitBtn");
const nameInput = document.getElementById("inputName");
const emailInput = document.getElementById("inputEmail1");
const alwaysOccursCheckbox = document.getElementById("checkAlwaysOccures");
const intermittentlyOccursCheckbox = document.getElementById("checkIntermittentlyOccure");
const detailsInput = document.getElementById("inputDetails");
const radioValidationMsg = document.getElementById("radioValidationMsg");

nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
alwaysOccursCheckbox.addEventListener('input', validateReproducibility);
intermittentlyOccursCheckbox.addEventListener('input', validateReproducibility);
detailsInput.addEventListener('input', validateDetails);

submit.addEventListener('click', submitForm);

function validateName() {
    const nameValidationMessage = document.getElementById("nameValidationMessage");
    nameValidationMessage.textContent = "";

    let name = nameInput.value.trim();

    if (name === "") {
        nameValidationMessage.textContent = "Name cannot be empty";
    } else if (name.length < 3) {
        nameValidationMessage.textContent = "Name should contain at least 3 characters";
    } else if (name.includes(' ')) {
        nameValidationMessage.textContent = "Spaces not allowed in between name";
    }
}

function validateEmail() {
    const emailValidationMessage = document.getElementById("emailValidationMessage");
    emailValidationMessage.textContent = "";

    let email = emailInput.value.trim();

    if (email === "") {
        emailValidationMessage.textContent = "Email cannot be empty";
    } else if (!email.includes("@")) {
        emailValidationMessage.textContent = "Email should contain '@'";
    } else if (!email.endsWith(".com")) {
        emailValidationMessage.textContent = "Email should end with '.com'";
    }
}

function validateReproducibility() {
    const reproducibilityValidationMessage = document.getElementById("reproducibilityValidationMessage");
    reproducibilityValidationMessage.textContent = "";

    let alwaysOccurs = alwaysOccursCheckbox.checked;
    let intermittentlyOccurs = intermittentlyOccursCheckbox.checked;

    if (!alwaysOccurs && !intermittentlyOccurs) {
        reproducibilityValidationMessage.textContent = "At least one checkbox needed";
    }
}

function validateDetails() {
    const detailsValidationMessage = document.getElementById("detailsValidationMessage");
    detailsValidationMessage.textContent = "";

    let details = detailsInput.value.trim();

    if (details === "") {
        detailsValidationMessage.textContent = "Details cannot be empty";
    } else if (details.length < 50) {
        detailsValidationMessage.textContent = "Explain briefly, at least 50 characters are required";
    }
}

function submitForm(event) {
    event.preventDefault();

    validateName();
    validateEmail();
    validateReproducibility();
    validateDetails();

    const typeRadios = document.querySelectorAll('input[name="radioDefaultType"]');
    let typeChecked = false;

    for (const typeRadio of typeRadios) {
        if (typeRadio.checked) {
            typeChecked = true;
            break;
        }
    }

    const priorityRadios = document.querySelectorAll('input[name="radioDefaultPriority"]');
    let priorityChecked = false;

    for (const priorityRadio of priorityRadios) {
        if (priorityRadio.checked) {
            priorityChecked = true;
            break;
        }
    }

    let radioValidationMsgText = "";

    if (!typeChecked) {
        radioValidationMsgText += "Please select a type";
    }

    if (!priorityChecked) {
        if (radioValidationMsgText !== "") {
            radioValidationMsgText += " and ";
        }
        radioValidationMsgText += "Please select a priority";
    }

    radioValidationMsg.textContent = radioValidationMsgText;
}











