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
      let mlevel = document.createElement('h6');
      let num = Math.floor(Math.random() * 4 ) + 1;

      // Build the h2 content out to show the prophet's full name
      if (member.memberlevel == "GOLD"|| member.memberlevel == "SILVER" && num == member.position) {
        name.textContent = `${member.comname}`;
        phoneNum.textContent = `Phone: ${member.phone}`;
        website.textContent = `Company Website: ${member.websiteURLs}`;
        website.setAttribute("href", member.websiteURLs);
        mail.textContent = `Email: ${member.email}`;
        mail.setAttribute("href", member.email);
        mlevel.textContent = `${member.memberlevel}`; //For some reason this only effects the thrid one in the middle that appears with position is met with num

        // Build the image portrait by setting all the relevant attributes
        portrait.setAttribute('src', member.imageurl);
        portrait.setAttribute('alt', `Image of ${member.comname}'s logo`); // fill in the blank
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');
      
      
      /** *

    const displayLinks = (websiteURLs) => {
      console.log(websiteURLs);
    
      websiteURLs.forEach((_web) => {
        // Create elements to add to the div.cards element
        //let list = document.createElement('li');
        let p = document.createElement('p');
        p.textContent = `Company Website: `; // fill in the blank
        
        let link1 = document.createElement('a');
        link1.textContent = member.websiteURLs;
        link1.setAttribute("href",member.websiteURLs);
        // Append the section(card) with the created elements
        p.appendChild(link1); //fill in the blank
        link1.appendChild(p);
        card.appendChild(link1);
    });
  }
      /**/

      // Append the section(card) with the created elements
      card.appendChild(name);
      card.appendChild(portrait);
      card.appendChild(phoneNum);
      card.appendChild(website);
      card.appendChild(mail);
      card.appendChild(mlevel);

      cards.appendChild(card);
    }
  });
}