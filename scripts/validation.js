function validate_userid() {
    let input_field = document.getElementById("id-input");
    let input_text = input_field.value;

    let length_error = document.getElementById("length-error");
    let format_error = document.getElementById("format-error");

    if (!check_length(input_text)) {
        length_error.style.display = "inline-block";
    }
    else {
        length_error.style.display = "none";
    }

    if (!check_format(input_text)) {
        format_error.style.display = "inline-block";
    }
    else {
        format_error.style.display = "none";
    }
}

function check_length(input) {
    return input.length > 4 && input.length < 13;
}

function check_format(input) {
    // TODO
}

function validate_name() {
    let name = document.getElementById("name-input").value;
    let error = document.getElementById("error-name");

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
    let error = document.getElementById("error-surname");

    const pattern = /[^a-zA-Z]/;
    if (pattern.exec(surname)) {
        error.style.display = "inline-block";
    }
    else {
        error.style.display = "none";
    }
}