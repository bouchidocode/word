function createCharInputs() {
    const container = document.getElementById('charInputs');
    container.innerHTML = ''; // Clear existing inputs

    const length = document.getElementById('length').value;
    for (let i = 1; i <= length; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = `Allowed characters for position ${i}`;
        input.id = `charInput${i}`;
        container.appendChild(input);
        container.appendChild(document.createElement('br'));
    }
}

function generateWords() {
    const length = document.getElementById('length').value;
    const numberOfWords = document.getElementById('numWords').value;
    let result = [];

    for (let j = 0; j < numberOfWords; j++) {
        let word = [];

        for (let i = 1; i <= length; i++) {
            const chars = document.getElementById(`charInput${i}`).value;
            if (chars.length > 0) {
                word += chars.charAt(Math.floor(Math.random() * chars.length));
            } else {
                word += [];
            }
        }

        result += `${word}\n`;
    }

    document.getElementById('result').innerText = result;
}
