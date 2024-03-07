const baseURL = "https://eldermjhafen.github.io/wdd230/";
const linksURL = "https://eldermjhafen.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
}

getLinks();

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}

const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let link = document.createElement('h4');
  
        link.textContent = `${week.lesson}: ${week.tittle}`; // fill in the blank
  
        // Append the section(card) with the created elements
        card.appendChild(link); //fill in the blank
  
        cards.appendChild(card);
    });
  }