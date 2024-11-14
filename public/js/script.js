// Function to search for pizzas based on the search term
async function searchPizza() {
    const searchTerm = document.getElementById('search').value.trim();
    if (searchTerm === '') {
        alert('Please enter a search term.');
        return;
    }

    const apiURL = `http://localhost:3002/api/pizza?search=${(searchTerm)}`;

    try {
        const response = await fetch(apiURL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        const mealsTable = document.getElementById('meals-table');
        mealsTable.innerHTML = ''; // Clear previous search results

        if (data.pizzas && data.pizzas.length > 0) {
            const table = document.createElement('table');
            table.innerHTML = `
                <tr>
                    <th>Pizza Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Image</th>
                </tr>
            `;
            data.pizzas.forEach(pizza => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${pizza.name}</td>
                    <td>${pizza.description}</td>
                    <td>${pizza.price}</td>
                    <td><img src="${pizza.image}" alt="${pizza.name}" style="max-width: 100px; border-radius:5px"></td>
                `;
                table.appendChild(row);
            });
            mealsTable.appendChild(table);
        } else {
            const row = document.createElement('tr');
            row.innerHTML = '<td colspan="4">No results found.</td>';
            mealsTable.appendChild(row);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to fetch and display all pizzas
async function showAllPizzas() {
    const apiURL = 'http://localhost:3002/api/pizza'; 

    try {
        const response = await fetch(apiURL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        const mealsTable = document.getElementById('meals-table');
        mealsTable.innerHTML = ''; // Clear previous search results

        if (data.pizzas && data.pizzas.length > 0) {
            const table = document.createElement('table');
            table.innerHTML = `
                <tr>
                    <th>Pizza Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Image</th>
                </tr>
            `;
            data.pizzas.forEach(pizza => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${pizza.name}</td>
                    <td>${pizza.description}</td>
                    <td>${pizza.price}</td>
                    <td><img src="${pizza.image}" alt="${pizza.name}" style="max-width: 200px; border-radius:5px"></td>
                `;
                table.appendChild(row);
            });
            mealsTable.appendChild(table);
        } else {
            const row = document.createElement('tr');
            row.innerHTML = '<td colspan="4">No pizzas available.</td>';
            mealsTable.appendChild(row);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
