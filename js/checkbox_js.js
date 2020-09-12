function verifyNickname()
{
	if(nickn.checked)
	{
		document.getElementById('nickname').style.display = "inline";
		document.getElementById('nname').setAttribute('required',true);
	}
	else
	{
		document.getElementById('nickname').style.display = "none";
		document.getElementById('nname').removeAttribute('required');
	}
}