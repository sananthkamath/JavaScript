var dishes = ["Pizza", " Pasta", " Idli-Vada", " Masala Dosa"];

function loadDishes()
{
	document.getElementById('dish').innerHTML = dishes;
}

function addDish()
{
	var x = prompt("Enter the name of the dish: ");
	dishes.push(" " + x);
	document.getElementById('dish').innerHTML = dishes;
}