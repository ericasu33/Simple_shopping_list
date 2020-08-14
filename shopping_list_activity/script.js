var enter = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li"); //gets an array of all li
var delButton = document.querySelectorAll(".delete");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var div = document.createElement("DIV");
	var btn = document.createElement("BUTTON");

	div.classList.add("flex");
	btn.classList.add("delete");

	li.appendChild(document.createTextNode(input.value));
	btn.appendChild(document.createTextNode("Delete"));
	ul.appendChild(div);
	div.appendChild(li);
	div.appendChild(btn);
	input.value = "";

	li.addEventListener("click", function(){
		li.classList.toggle("done");
	});

	btn.addEventListener("click", removeItem);
};

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

li.forEach(function(todo) {  //iterate thru the li array aldy created
	todo.addEventListener("click", function(){
		todo.classList.toggle("done");
	})
});

function removeItem(event){
	ul.removeChild(event.target.parentElement); //removes the div element (and everything inside) of the clicked button
}

delButton.forEach(function(delBtn){ //iterate thru the button array aldy created
	delBtn.addEventListener("click", removeItem);
});


enter.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
