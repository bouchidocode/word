function generateWords() {
    const letters = document.getElementById('letters').value;
    const numbers = document.getElementById('numbers').value;
    
    // Simple example of combining letters and numbers
    const combined = letters.split('').concat(numbers.split(''));
    
    // Generate words (in this example, simply joining)
    const generatedWords = combined.join('');
    
    // Display the generated words
    document.getElementById('output').innerText = generatedWords;
}
