const texts = [
    {
        author: "Павел",
        text: "Насть, сегодня твой замечательный день. Хоть мы и мало знакомы, я очень рад что у нас есть такая возможность. Желаю тебе не сдаваться, не смотря ни на что, и чтобы ты оставалась такой же хорошей и поддерживающейся, какой ты и являешься. ❤️🥳"
    },
    {
        author: "Милана",
        text: "Любимая Настя, не сдохни, ты мне ещё нужна, чтобы содержать меня. Люблю тебя, целую, обнимаю... старуха 😋"
    },
    {
        author: "Николь",
        text: ""
    },
    {
        author: "Риналд",
        text: ""
    },
    {
        author: "Каролина",
        text: ""
    },
    {
        author: "Синдия",
        text: "Ты достойна самого лучшего в этой жизни — невероятных успехов, ярких эмоций и исполнения всех заветных желаний. Гуляй, люби и веселись, а каждый день пусть приносит только радость, счастье и вдохновение, ведь ты этого заслуживаешь! Мы все тебя ценим и очень любим!❤️🎉🍾"
    },
    {
        author: "Эдгар",
        text: ""
    },
    {
        author: "Арина (12 класс)",
        text: "Настя, поздравляю тебя с этим замечательным днём! Желаю тебе счастья, успехов и ярких моментов в жизни!",
    },
]

function createCard(author, text) {
    var cardThingy = document.getElementById('cards');
    var card = document.createElement("li");
    card.className = "card";

    var divMain = document.createElement("div");
    card.appendChild(divMain);

    var authorName = document.createElement("h3");
    authorName.className = "card-title";
    authorName.textContent = author;
    divMain.appendChild(authorName);

    var divText = document.createElement("div");
    divText.className = "card-content";

    pText = document.createElement("p");
    pText.textContent = text;
    divText.appendChild(pText);
    
    divMain.appendChild(divText);

    cardThingy.appendChild(card);
}

function addCards() {
    playMusic('assets/music/ambient.mp3', 0.3)
    texts.forEach(cngr => {
        createCard(cngr.author, cngr.text);
    })
}