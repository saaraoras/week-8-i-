const btnPrint = document.querySelector('#printButton');
const outputDiv = document.querySelector('#output');

btnPrint.addEventListener('click', () => {
    for (let i = 0; i < 10; i++) {
        const sentence = document.createElement('p');
        sentence.textContent = "I am awesome!";
        outputDiv.appendChild(sentence);
    }
});
