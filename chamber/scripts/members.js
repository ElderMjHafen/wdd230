const url = 'https://eldermjhafen.github.io/wdd230/chamber/data/members.json';
const cards = document.querySelector('#cards');

async function getMembertData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayMembers(data.members); // note that we reference the prophets array of the JSON data object, not just the object
}
  
getMembertData();

const displayMembers = (members) => {
    members.forEach((member) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let fullName = document.createElement('h2');
      let portrait = document.createElement('img');

      // Build the h2 content out to show the prophet's full name
      fullName.textContent = `${member.name} ${member.phone} ${member.phone}`; // fill in the blank
      // Build the image portrait by setting all the relevant attributes
      portrait.setAttribute('src', member.imageurl);
      portrait.setAttribute('alt', `Portrait of ${member.name} ${member.lastname}`); // fill in the blank
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');

      // Append the section(card) with the created elements
      card.appendChild(fullName); //fill in the blank
      card.appendChild(portrait);

      cards.appendChild(card);
  });
}