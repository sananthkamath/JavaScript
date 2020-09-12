function verify()
{
	var e1 = document.getElementById('email_addr');
	var e2 = document.getElementById('email_rpt');
	if(e1.value == e2.value)
	{
		alert("E-mails match!!");
		return true;
	}
	else
	{
		alert("E-mails do not match!! Kindly enter the same email address.");
		return false;
	}
}