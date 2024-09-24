const texts = [
    "Ты уверена?",
    "Ты точно уверена?",
    "Точно-точно?",
    "Не передумала ещё?",
];

const buttonLabels = [
    "Да",
    "Да, точно",
    "ДА",
    "ДА ОТКРЫВАЙ УЖЕ!!!",
];

const imagePaths = [
    'assets/images/suscat1.png',
    'assets/images/suscat2.png',
    'assets/images/suscat3.png',
    'assets/images/suscat4.png'
]

const delays = [
    0,
    1000,
    2000,
    5000,
    5000
];

let currentIndex = 0;

function createTeasing() {
    var content = document.getElementById('content');
    content.innerHTML = '';

    let text = document.createElement('text')
    text.className = "text";
    text.id = 'text'
    text.textContent = texts[currentIndex];
    content.appendChild(text);

    // Image in the center
    let img = document.createElement('img');
    img.src = imagePaths[currentIndex];
    img.className = "image";
    img.id = 'img'
    content.appendChild(img);

    let buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';

    let button = document.createElement('button');
    button.className = 'button2';
    button.id = 'button'
    button.role = 'button';
    button.textContent = buttonLabels[currentIndex];

    button.addEventListener("click", updateContent);
    buttonContainer.appendChild(button);

    content.appendChild(buttonContainer);
}

function updateContent() {
    if (currentIndex+1 < texts.length) {
        // Get the text and button elements
        const textElement = document.getElementById('text');
        const imageElement = document.getElementById("img");
        const buttonElement = document.getElementById('button');

        buttonElement.style.display = 'none';

        // Increment the index, loop back if necessary
        currentIndex = (currentIndex + 1) % texts.length;

        // Change the elements
        imageElement.src = imagePaths[currentIndex];
        textElement.textContent = texts[currentIndex];
        setTimeout(() => {
            buttonElement.style.display = 'inline-block';
            buttonElement.textContent = buttonLabels[currentIndex];
        }, delays[currentIndex])
        
    } else if (currentIndex+1 == texts.length) window.location.replace('present.html')
}