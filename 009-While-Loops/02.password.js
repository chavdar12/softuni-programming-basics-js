function password(input) {
    const [username, pass] = input;
    let i = 2;
    while (input[i] !== pass) {
        i++;
    }
    console.log(`Welcome ${username}!`);
}

module.exports = password;
