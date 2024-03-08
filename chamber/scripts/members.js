const url = 'https://eldermjhafen.github.io/wdd230/chamber/data/members.json';
const cards = document.querySelector('#members');

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
      let name = document.createElement('h2');
      let portrait = document.createElement('img');
      let phoneNum = document.createElement('h3');
      let website = document.createElement('h4');
      let mail = document.createElement('h5');

      // Build the h2 content out to show the prophet's full name
      name.textContent = `${member.comname}`;
      phoneNum.textContent = `Phone: ${member.phone}`;
      website.textContent = `Company Website: ${member.websiteURLs}`;
      mail.textContent = `Email: ${member.email}`; // fill in the blank
      // Build the image portrait by setting all the relevant attributes
      portrait.setAttribute('src', member.imageurl);
      portrait.setAttribute('alt', `Image of ${member.comname}'s logo`); // fill in the blank
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');

      // Append the section(card) with the created elements
      card.appendChild(name);
      card.appendChild(portrait);
      card.appendChild(phoneNum);
      card.appendChild(website);
      card.appendChild(mail);

      cards.appendChild(card);
  });
}