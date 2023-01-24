var pressedKeysCounter = {'mouseClick': 0, 'id': 0, 'name': 0, 'surname': 0, 'address': 0, 'email': 0, 
                          'country': 0, 'zipcode': 0, 'sex': 0, 'language': 0, 'password': 0};


function handle_event() {
    for (const [key, value] of Object.entries(pressedKeysCounter)) {
        console.log(key + ' ' + value);
        if (key != 'mouseClick') {
            console.log(validate_characters_number(key));
        }
    }
}

function validate_keys_pressed(id) {
    pressedKeysCounter[id]++;
}

function validate_characters_number(field) {
    return document.getElementById(field + '-input').value.length;
}
