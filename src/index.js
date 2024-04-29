import "./styles/styles.css";

const container = document.getElementById("container");
const search = document.getElementById("searchHealines");


const searchField = document.getElementById("searchField");


search.addEventListener("click", async () => {
    const response = await fetch('http://localhost:5000/top_headlines', {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({'country': searchField.value}),
    });
    const headlines = await response.json();
    const headlinesList = headlines["articles"]
    container.innerHTML = "";
    for (let story of headlinesList) {
        const card = createCard(story["title"], story["urlToImage"], story["content"]);
    }    
});

function createCard(cardTitle, imageURL, content) {
    const card = document.createElement("div");
    card.classList = ["card"];
    card.style.width = "18rem";

    const cardImage = document.createElement("img");
    cardImage.src = imageURL

    const cardBody = document.createElement("div");
    cardBody.classList = ["card-body"];

    const cardBodyTitle = document.createElement("h5");
    cardBodyTitle.classList = ["card-title"];
    cardBodyTitle.innerText = cardTitle;

    const cardBodyText = document.createElement("p");
    cardBodyText.classList = ["card-text"];
    cardBodyText.innerText = content;

    const modal = document.createElement("div");
    modal.classList = ["modal", "fade"];
    modal.id = parseInt(Math.random() * 10000);

    const cardBodyAnchor = document.createElement("a");
    cardBodyAnchor.classList = ["btn btn-primary"];
    cardBodyAnchor.setAttribute("data-bs-toggle", "modal");
    cardBodyAnchor.setAttribute("data-bs-target", modal.id);
    cardBodyAnchor.innerText = "Expand";
    
    card.appendChild(cardImage);
    card.appendChild(cardBody);
    cardBody.appendChild(cardBodyTitle);
    cardBody.appendChild(cardBodyText);
    cardBody.appendChild(cardBodyAnchor);
    container.appendChild(card);
}
