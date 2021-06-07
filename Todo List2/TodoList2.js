const container = document.querySelector(".container");
var inputValue = document.querySelector(".input");
const add = document.querySelector(".add");

if(window.localStorage.getItem("todos") == undefined){
	var todos = [];
	// Convert a JavaScript object into a string
	window.localStorage.setItem("todos", JSON.stringify(todos));
}

var todosEx = window.localStorage.getItem("todos");
// convert the string into a JavaScript object
var todos = JSON.parse(todosEx);

// enable add button
add.addEventListener("click", addItem);
// enable enter key
window.addEventListener("keydown", (e) => {
	if(e.which == 13 || e.keyCode == 13){
		addItem();
	}
});

function addItem(){
	if(inputValue.value != ""){
		new item(inputValue.value);
		todos.push(inputValue.value);
		window.localStorage.setItem("todos", JSON.stringify(todos));
		inputValue.value = "";
	}
}

class item{
	constructor(name){
		this.createItem(name);
	}
	createItem(name){
		var itemBox = document.createElement("div");
		itemBox.className = "item";

		var input = document.createElement("input");
		input.type = "text";
		input.disabled = true;
		input.value = name;
		input.classList.add("item_input");

		var edit = document.createElement("button");
		edit.classList.add("edit");
		edit.innerHTML = "EDIT";
		edit.addEventListener("click", ()=> this.edit(input, name));

		var remove = document.createElement("button");
		remove.classList.add("remove");
		remove.innerHTML = "REMOVE";
		remove.addEventListener("click", ()=> this.remove(itemBox, name));

		container.appendChild(itemBox);

		itemBox.appendChild(input);
		itemBox.appendChild(edit);
		itemBox.appendChild(remove);

	}

	edit(input, name){
		if(input.disabled == true){
			input.disabled = !input.disabled;
		}
		else{
			input.disabled = !input.disabled;
			let index = todos.indexOf(name);
			todos[index] = input.value;
			window.localStorage.setItem("todos", JSON.stringify(todos));
		}
	}
	
	remove(itemBox, name){
		itemBox.parentNode.removeChild(itemBox);
		let index = todos.indexOf(name);
		todos.splice(index, 1);
		window.localStorage.setItem("todos", JSON.stringify(todos));
	}
}

for(let i=0; i<todos.length; i++){
	new item(todos[i]);
}
