function noSurprise() {
    // Delete everything on the page
    var content = document.getElementById('content');
    content.innerHTML = '';

    // Image in the center
    let img = document.createElement('img');
    img.src = 'assets/images/sad_hampter.jpg';
    img.className = "image";
    content.appendChild(img);

    let buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';

    let button = document.createElement('button');
    button.className = 'button2';
    button.role = 'button';
    button.textContent = 'Передумать';

    button.addEventListener("click", refreshPage);
    buttonContainer.appendChild(button);

    content.appendChild(buttonContainer);

    // Start playing the music
    playMusic("assets/music/sad_hampter.mp3", 0.3)
}