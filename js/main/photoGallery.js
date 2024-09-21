const amountOfPhotos = 10; 

function addPhotos() {
    var photoDiv = document.querySelector('.media-scroller') 
    for (let i = 1; i <= amountOfPhotos; i++) {
        const div = document.createElement("div");
        div.className = "media-element";

        const img = document.createElement("img");
        img.src = `assets/images/main/photo-${i}.png`;
        div.appendChild(img);

        photoDiv.appendChild(div);

    }
}