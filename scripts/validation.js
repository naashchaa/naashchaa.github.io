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