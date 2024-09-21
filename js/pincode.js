let W = window.innerWidth;
let H = window.innerHeight;
let attempts = 0;
let atmptsBefHit = 5;
const code = 2509;

function checkCode() {
    
    attempts++;

    const inputDiv = document.getElementById('pin-code')
    const inputs = inputDiv.querySelectorAll("input")
    let inputCode = []
    let codeToCheck;
    
    inputs.forEach((input, index) => {
        const value = input.value;
        inputCode.push(value);

        codeToCheck = inputCode.join("").trim()
    })

    if (codeToCheck != code) {
        flashRed()
    } else {
        openPresent()
    }
}

function flashRed() {
    var content = document.getElementById('content');

    var hint = document.getElementById("hint-text")
    if(attempts >= atmptsBefHit) {
        hint.textContent = "Подсказка: Одно из значительных для тебя дней."
    }

    red = document.createElement('div');
    red.id = 'redOverlay' + attempts;
    red.className = 'redOverlay';
    red.width = W;
    red.height = H;
    red.style.opacity = 1;
    content.appendChild(red);

    setTimeout(() => {
        red.style.opacity = 0; // Fade out after 2 seconds automatically
    }, 500);
    setTimeout(() => {
        content.removeChild(red);
    }, 2300)
}

function openPresent() {
    var content = document.getElementById('content');
    content.innerHTML = '';

    let text = document.createElement('h1')
    text.className = "text";
    text.id = 'opening-text'
    text.textContent = 'Открыть подарок?';
    content.appendChild(text);

    let buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';

    let yesBtn = document.createElement('button');
    yesBtn.className = 'button2';
    yesBtn.role = 'button';
    yesBtn.textContent = 'Да, открыть.';

    yesBtn.addEventListener("click", createTeasing);
    buttonContainer.appendChild(yesBtn);

    let noBtn = document.createElement('button');
    noBtn.className = 'button2';
    noBtn.role = 'button';
    noBtn.textContent = 'Нет.';

    noBtn.addEventListener("click", noSurprise);
    buttonContainer.appendChild(noBtn);

    content.appendChild(buttonContainer);

    playMusic('assets/music/agency.mp3', 0.3)
}

window.addEventListener(
    "resize",
    function() {
      var red = document.getElementById('redOverlay');
      W = window.innerWidth;
      H = window.innerHeight;
      red.width = window.innerWidth;
      red.height = window.innerHeight;
    },
    false
);