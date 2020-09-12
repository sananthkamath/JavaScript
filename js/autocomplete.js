function billingFunction()
{
	if(same.checked)
	{
		var name = document.getElementById('shippingName').value;
		document.getElementById('billingName').setAttribute('value',name);
		var zip = document.getElementById('shippingZip').value;
		document.getElementById('billingZip').setAttribute('value',zip);
	}
	else
	{
		document.getElementById('billingName').removeAttribute('value');
		document.getElementById('billingZip').removeAttribute('value');
	}
}

