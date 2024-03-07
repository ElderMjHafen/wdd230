const baseURL = "https://eldermjhafen.github.io/wdd230/";
const linksURL = "https://eldermjhafen.github.io/wdd230/data/links.json";
const activity = document.querySelector('#activity');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
    console.log(data);
}

getLinks();

const displayLinks = (weeks) => {
    console.log(weeks);
    
    weeks.forEach((week) => {
        // Create elements to add to the div.cards element
        let list = document.createElement('li');
        let p = document.createElement('p');
        p.textContent = `Week ${week.lesson}: `; // fill in the blank


        week.links.forEach((weeklinks) => {
            let link = document.createElement('a');
            link.textContent = " | " + weeklinks.title;
            link.setAttribute("href", weeklinks.url);
            // Append the section(card) with the created elements
            p.appendChild(link); //fill in the blank
        });
        list.appendChild(p);
  
        activity.appendChild(list);
    });
}