var input = document.getElementById("userinput"); //selecting all the elements we need and cacheing it in a variable
var button = document.getElementById("enter");
var ul = document.querySelector("ul");


function appendList(){ //function declaration to append something to list
	if(input.value.length>0){
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value)); //document.createTextNode is used to add text inside of an element (See diagram of the DOM), input.value uses the value in the input box
		ul.appendChild(li); //appenidng the li with the text node we made to the bottom of the list
		input.value = ""; //clearing the value on the input so it is empty, so that we can start typing the next item
		li.addEventListener("click",function(){ //assigning an event listener function to put a strike through when clicked
			li.classList.toggle("done")
		})
		//create delete button
		var delbtn = document.createElement("input"); //create an input element and assign it to Button
		delbtn.setAttribute("type","checkbox"); //make the input element a checkbox by injecting an attribute to it.
		li.appendChild(delbtn); //add the input element to the end of the list item that the user inputs
		delbtn.addEventListener('click', function(){ //funtction that deletes li element assigned to button
			li.remove() 
		})
	}
}


function addListAfterKeyPress(event) { //adds the event after keypress, passes it to the function above after passing the if statement. 
		if(event.keyCode ===13){
		appendList();
	}
}

input.addEventListener("keypress",addListAfterKeyPress);

button.addEventListener("click", appendList);
