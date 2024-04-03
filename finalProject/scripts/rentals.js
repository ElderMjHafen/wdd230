const url = "https://eldermjhafen.github.io/wdd230/finalProject/data/rental.json";

async function fetchJSON(url) {
    const response = await fetch(url);
    return await response.json();
}

fetchJSON(url)
    .then(data => {
        const rentalTableBody = document.getElementById("rentalTableBody");

        data.Rentals.forEach(rental => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${rental.type}</td>
                <td>${rental.max}</td>
                <td>$${rental.reservation[0].halfDay}</td>
                <td>$${rental.reservation[0].fullDay}</td>
                <td>$${rental['walk-in'][0].halfDay}</td>
                <td>$${rental['walk-in'][0].fullDay}</td>
            `;
            rentalTableBody.appendChild(row);
        });
    })
    .catch(error => console.error("Error fetching data:", error));