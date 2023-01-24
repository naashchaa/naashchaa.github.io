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
    return input.length > 4 && input.length < 13;
}

function check_username_format(input) {
    const capitals = ["A", "B", "C", "D", "E", "F", 
                        "G", "H", "I", "J", "K", "L", 
                        "M", "N", "O", "P", "Q", "R", 
                        "S", "T", "U", "V", "W", "X", "Y", "Z"];
    
    const specials = ["!", "@", "#", "$", "%", 
                        "^", "&", "*", "_", "-",
                        "0", "1", "2", "3", "4", 
                        "5", "6", "7", "8", "9"];

    let startsWithCapital = capitals.includes(input.substring(0, 1));
    let endsWithSpecial = specials.includes(input.substring(input.length - 1, input.length));
    console.log(input.substring(input.length - 1, input.length));
    console.log(startsWithCapital);
    console.log(endsWithSpecial);
    return startsWithCapital && endsWithSpecial;
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
    // step 1: detect @

    let chars = input.split('');

    if (!chars.includes("@"))
        return false;

    let at_index = chars.indexOf("@");

    let first_half = input.substring(0, at_index);
    let second_half = input.substring(at_index, input.length);

    return check_email_name(first_half) && check_email_domain(second_half);
}

function check_email_name(name) {
    return name.length > 0;
}

function check_email_domain(domain) {
    let parts = domain.split(".");
    return (parts.length > 1) && (parts[parts.length-1].length > 1) && (parts[parts.length-1].length < 4); 
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
    const letters = ["A", "B", "C", "D", "E", "F", 
                        "G", "H", "I", "J", "K", "L", 
                        "M", "N", "O", "P", "Q", "R", 
                        "S", "T", "U", "V", "W", "X", "Y", "Z",
                        "a", "b", "c", "d", "e", "f", 
                        "g", "h", "i", "j", "k", "l", 
                        "m", "n", "o", "p", "q", "r", 
                        "s", "t", "u", "v", "w", "x", "y", "z"];

    const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    if (input.length != 6) {
        return false;
    }
    else {
        let first_half = input.substring(0, 4);
        let second_half = input.substring(4, 6);

        first_half.split('').forEach((element) => {if (!digits.includes(element)) return false;})
        second_half.split('').forEach((element) => {if (!letters.includes(element)) return false;})
    }

    return true;
}

