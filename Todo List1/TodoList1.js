const input = document.getElementById("taskInput");
const btn = document.getElementById("addbtn");

btn.addEventListener("click", addList);
input.addEventListener("keyup", (e) => {
	if(e.which == 13 || e.which == 13){
		addList(e);
	}
});

function addList(){
	const notCompleted = document.querySelector(".notCompleted");
	const Completed = document.querySelector(".Completed");

	const newLi = document.createElement("li");
	const checkBtn = document.createElement("button");
	const delBtn = document.createElement("button");

	checkBtn.innerHTML = "<i class='fa fa-check'></i>";
	delBtn.innerHTML = "<i class='fa fa-trash'></i>";

	if(input.value != ""){
		newLi.textContent = input.value;
		input.value = "";
		notCompleted.appendChild(newLi);
		newLi.appendChild(checkBtn);
		newLi.appendChild(delBtn);
	}

	checkBtn.addEventListener("click", function(){
		const parent = this.parentNode;
		parent.remove();
		Completed.appendChild(parent);
	});

	delBtn.addEventListener("click", function(){
		const parent = this.parentNode;
		parent.remove();
	});
}