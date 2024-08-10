document.getElementById('length').addEventListener('change', function() {
    const length = parseInt(this.value) || 0;
    const container = document.getElementById('inputsContainer');
    container.innerHTML = '';

    for (let i = 1; i <= length; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = `Allowed characters for position ${i}: e.g. abcdefg`;
        input.id = `position${i}`;
        container.appendChild(input);
    }
});

function generateWords() {
    const length = parseInt(document.getElementById('length').value) || 0;
    const maxWords = parseInt(document.getElementById('maxWords').value) || 0;
    const words = [];

    const getWord = (currentWord = '', index = 1) => {
        if (index > length) {
            words.push(currentWord);
            return;
        }

        const allowedChars = document.getElementById(`position${index}`).value;
        for (const char of allowedChars) {
            getWord(currentWord + char, index + 1);
            if (words.length >= maxWords) break;
        }
    };

    getWord();

    document.getElementById('output').innerText = words.join(', ') || 'No words generated';
}
