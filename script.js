
 

    

    // Fetch books from API
async function fetchBooks() {
    try {
        
        const response = await fetch('http://localhost:8080/books', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const books = await response.json();
        displayBooks(books);
    } catch (err) {
        console.error('Error fetching books:', err);
    }
}

// Display books in the list
function displayBooks(booksJson) {
    const booksList = document.getElementById('books');
    booksList.innerHTML = ''; // Clear existing books
    const books = booksJson.books || [];
    books.forEach(book => {
        const li = document.createElement('li');

        // Description (left-aligned)
        const name = document.createElement('span');
        name.textContent = book.name;
    

   /*     // Estimation (right-aligned, bold blue)
        const estimation = document.createElement('span');
        estimation.textContent = ticket.estimation;
        estimation.classList.add('ticket-estimation', `ticket-estimation-${ticket.estimation}`);

        // Decision (right-aligned, red or green based on value)
        const decision = document.createElement('span');
        decision.textContent = ticket.decision;
        decision.classList.add('ticket-decision', ticket.decision === 'TO_GO' ? 'ticket-decision-green' : 'ticket-decision-red');

        // Edit button
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', () => enableEditing(li, ticket));

        const closeBtn = document.createElement('span');
        closeBtn.textContent = '✖';
        closeBtn.className = 'close-icon';
        closeBtn.title = 'Remove ticket';
        closeBtn.addEventListener('click', () => {
            const isRmoved = removeTicket(ticket.ticketNumber);
            if(isRmoved) {
                ticketList.removeChild(li);
            } else {
                alert('Failed to remove the ticket. Please try again.'); 
            }
        });
        */
        li.appendChild(name);
        /*
        li.appendChild(estimation);
        li.appendChild(decision);
        li.appendChild(editBtn);
        li.appendChild(closeBtn);*/
        booksList.appendChild(li);
    });
}



// Display books in the list
function displayBooks(booksJson) {
    const booksList = document.getElementById('books');
    booksList.innerHTML = ''; // Clear existing books
    const books = booksJson.books || [];
    books.forEach(book => {
        const li = document.createElement('li');
        const name = document.createElement('span');
        name.textContent = book.name;
        li.appendChild(name);
        booksList.appendChild(li);
    });
}
// Display books in the list
function displayReaders(readerJson) {
    const readersList = document.getElementById('readers');
    readersList.innerHTML = ''; // Clear existing books
    const readers = booksJson.readers || [];
    readers.forEach(reader => {
        const li = document.createElement('li');
        const name = document.createElement('span');
        name.textContent = reader.name;
        li.appendChild(name);
        readersList.appendChild(li);
    });
}