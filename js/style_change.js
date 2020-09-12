function openPara()
{
	x = document.getElementById('demo');
	//x.style.display = "block"; //obtained by hard coding the style.
	x.className = "open"; //modifying/changing the style
}

function closePara()
{
	x = document.getElementById('demo');
	//x.style.display = "none"; //obtained by hard coding the style.
	x.className = "close";
}