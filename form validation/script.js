const submit = document.querySelector(".submitBtn");
const nameInput = document.getElementById("inputName");
const emailInput = document.getElementById("inputEmail1");
const alwaysOccursCheckbox = document.getElementById("checkAlwaysOccures");
const intermittentlyOccursCheckbox = document.getElementById("checkIntermittentlyOccure");
const detailsInput = document.getElementById("inputDetails");
const radioValidationMsg = document.getElementById("radioValidationMsg");


String.prototype.isEmpty = function() {
    return this.trim() === "";
};

String.prototype.hasMinimumLength = function(length) {
    return this.length >= length;
};

String.prototype.hasValidEmailFormat = function() {
    return /^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,})+$/.test(this);
};

const validateName = () => {
    const nameValidationMessage = document.getElementById("nameValidationMessage");
    nameValidationMessage.textContent = "";

    let name = nameInput.value.trim();

    if (name.isEmpty()) {
        nameValidationMessage.textContent = "Please enter your name";
    } else if (!name.hasMinimumLength(3)) {
        nameValidationMessage.textContent = "Name should contain at least 3 alphabetical characters";
    } else if (name.includes(' ')) {
        nameValidationMessage.textContent = "Spaces are not allowed in the name";
    }
};

const validateEmail = () => {
    const emailValidationMessage = document.getElementById("emailValidationMessage");
    emailValidationMessage.textContent = "";

    let email = emailInput.value.trim();

    if (email.isEmpty()) {
        emailValidationMessage.textContent = "Please enter your email";
    } else if (!email.hasValidEmailFormat()) {
        emailValidationMessage.textContent = "Invalid email format";
    }
};

const validateReproducibility = () => {
    const reproducibilityValidationMessage = document.getElementById("reproducibilityValidationMessage");
    reproducibilityValidationMessage.textContent = "";

    let alwaysOccurs = alwaysOccursCheckbox.checked;
    let intermittentlyOccurs = intermittentlyOccursCheckbox.checked;

    if (!alwaysOccurs && !intermittentlyOccurs) {
        reproducibilityValidationMessage.textContent = "Please select at least one option for reproducibility";
    }
};

const validateDetails = () => {
    const detailsValidationMessage = document.getElementById("detailsValidationMessage");
    detailsValidationMessage.textContent = "";

    let details = detailsInput.value.trim();

    if (details.isEmpty()) {
        detailsValidationMessage.textContent = "Please provide details about the issue";
    } else if (!details.hasMinimumLength(50)) {
        detailsValidationMessage.textContent = "Please provide a detailed explanation (at least 50 characters)";
    }
};

const submitForm = (event) => {
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
};


nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
alwaysOccursCheckbox.addEventListener('input', validateReproducibility);
intermittentlyOccursCheckbox.addEventListener('input', validateReproducibility);
detailsInput.addEventListener('input', validateDetails);

submit.addEventListener('click', submitForm);












