function generateWords() {
    const length = document.getElementById('length').value;
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    let word = '';

    for (let i = 0; i < length; i++) {
        word += letters.charAt(Math.floor(Math.random() * letters.length));
    }

    document.getElementById('result').innerText = `Generated Word: ${word}`;
}
