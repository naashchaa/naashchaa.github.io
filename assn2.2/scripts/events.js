var pressedKeysCounter = {'mouseClick': 0, 'id': 0, 'name': 0, 'surname': 0, 'address': 0, 'email': 0, 
                          'country': 0, 'zipcode': 0, 'sex': 0, 'language': 0, 'password': 0};

const start = Date.now();

function handle_event() {
    for (const [key, value] of Object.entries(pressedKeysCounter)) {
        console.log(key + ' ' + value);
        if (key != 'mouseClick') {
            console.log(validate_characters_number(key));
        }
    }

    display_statistics();
}

function display_statistics() {
    document.getElementById("big-brother-logs").style.display = "flex";
    document.getElementById("stat-mouse-clicks").textContent = "Number of mouse clicks: " + pressedKeysCounter['mouseClick'];
    document.getElementById("stat-time-spent").textContent = "Total time spent: " + total_time();
    document.getElementById("stat-key-presses").textContent = "Total key presses: " + total_key_presses();
    document.getElementById("stat-typed-chars").textContent = "Number of characters typed: " + total_typed_chars();
    return false;
}

function validate_keys_pressed(id) {
    pressedKeysCounter[id]++;
}

function validate_characters_number(field) {
    return document.getElementById(field + '-input').value.length;
}

function total_time() {
    let seconds =  (Date.now() - start) / 1000;
    let minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);
    return minutes + " minutes and " + seconds + " seconds";
}

function total_key_presses() {
    let sum = 0;
    for (const [key, value] of Object.entries(pressedKeysCounter)) {
        if (key != 'mouseClick')
            sum += value;
    }
    return sum;
}

function total_typed_chars() {
    let sum = 0;
    for (const [key, value] of Object.entries(pressedKeysCounter)) {
        if (key != 'mouseClick' && key != 'country' && key != 'sex' && key != 'language')
            sum += validate_characters_number(key);
    }
    return sum;
}
