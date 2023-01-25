function validate_userid() {
    let input_field = document.getElementById("id-input");
    let input_text = input_field.value;

    let length_error = document.getElementById("username-length-error");
    let format_error = document.getElementById("username-format-error");

    if (!check_username_length(input_text)) {
        length_error.style.display = "inline-block";
    }
    else {
        length_error.style.display = "none";
    }

    if (!check_username_format(input_text)) {
        format_error.style.display = "inline-block";
    }
    else {
        format_error.style.display = "none";
    }
}

function check_username_length(input) {
    const pattern = /^(.{5,12})$/;

    return pattern.test(input);
}

function check_username_format(input) {
    const pattern = /[A-Z](.*)[!-9]/;

    return pattern.test(input);
}

function validate_email() {
    let input_field = document.getElementById("email-input");
    let input_text = input_field.value;

    let format_error = document.getElementById("email-format-error");

    if (!check_email_format(input_text)) {
        format_error.style.display = "inline-block";
    } 
    else {
        format_error.style.display = "none";
    }
}

function check_email_format(input) {
    // email verification regexp lifted from http://emailregex.com/
    const pattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    return pattern.test(input);
}

function validate_zipcode() {
    let input_field = document.getElementById("zipcode-input");
    let input_text = input_field.value;

    let format_error = document.getElementById("zipcode-format-error");

    if (!check_zipcode_format(input_text)) {
        format_error.style.display = "inline-block";
    }
    else {
        format_error.style.display = "none";
    }
}

function check_zipcode_format(input) {
    const pattern = /^[0-9]{4}[a-zA-Z]{2}$/;

    return pattern.test(input);
}

function validate_name() {
    let name = document.getElementById("name-input").value;
    let error = document.getElementById("name-error");

    const pattern = /[^a-zA-Z]/;
    if (pattern.exec(name)) {
        error.style.display = "inline-block";
    }
    else {
        error.style.display = "none";
    }
}

function validate_surname() {
    let surname = document.getElementById("surname-input").value;
    let error = document.getElementById("surname-error");

    const pattern = /[^a-zA-Z]/;
    if (pattern.exec(surname)) {
        error.style.display = "inline-block";
    }
    else {
        error.style.display = "none";
    }
}
