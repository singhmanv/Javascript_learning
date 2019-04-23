function myfunction()
{
	document.getElementById("1").innerHTML = "Javascript";
}

function myfun()
{
	document.write (5 + 6);
}

function myalert()
{
	window.alert("Hii");
}

function conLOG()
{
	console.log("Log message here ");
}

function Addition( a,  b)
{
	//var a = document.getElementById(arg1).value;
	//var b = document.getElementById(arg2).value;
	
	if (a == "")
	{
		alert("Please enter first number.");
		return;
	}
	if (b == "")
	{
		alert("Please enter second number.");
		retutn;
	}
	return (a) + (b);
}

function getname(email)
{
	if (email == "")
	{
		alert("Please enter an email address.");
		return;
	}
	var index = email.indexOf("@");
	if (index == -1)
	{
		alert("Please enter a valid email address.");
		return;
	}
	
	return email.substring(0,index);
}

function DisplayPrompt()
{
	var output = prompt("Please enter a number...",3);
	alert(output);
}

function add(num1, num2)
{
	return parseInt(num1) + parseInt(num2) ;
}

function sub(num1, num2)
{
	return parseInt(num1) - parseInt(num2) ;
}

function mul(num1, num2)
{
	return parseInt(num1) * parseInt(num2) ;
}

function Calculation(num1, num2, callback)
{
	if (typeof callback === 'function')
	{
		console.log( "Hello" + callback(num1,num2) );
		return callback(num1,num2);
	}
	else 
	{
		return "Callback fail";
	}
}

