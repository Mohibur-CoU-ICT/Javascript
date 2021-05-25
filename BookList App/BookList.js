const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const btn = document.querySelector('#button');
const bookList = document.querySelector('#book-list');

button.addEventListener('click', function(e){
	// console.log("Hello");
	e.preventDefault();
	
	// Basic Validation
	if(title.value == '' || author.value == '' || year == ''){
		alert('Please input your information.');
	}
	else{
		const newRow = document.createElement('tr');
		
		// Creating new title
		const newTitle = document.createElement('th');
		newTitle.innerHTML = title.value;
		newRow.appendChild(newTitle);
		
		// Creating new author
		const newAuthor = document.createElement('th');
		newAuthor.innerHTML = author.value;
		newRow.appendChild(newAuthor);
		
		// Creating new year
		const newYear = document.createElement('th');
		newYear.innerHTML = year.value;
		newRow.appendChild(newYear);
		
		// Displaying in UI
		bookList.appendChild(newRow);
	}
});