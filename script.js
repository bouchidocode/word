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

        result.push(word); // Push the word into the result array
    }

    const resultElement = document.getElementById('result');
    resultElement.innerText = result.join(', '); // Display the generated words

    const wordsToCopy = result.join(', '); // Join the words with a comma for copying

    // Copy the generated words to the clipboard
    navigator.clipboard.writeText(wordsToCopy)
        .then(() => {
            console.log('Words copied to clipboard');
        })
        .catch(err => {
            console.error('Failed to copy words: ', err);
        });
}
