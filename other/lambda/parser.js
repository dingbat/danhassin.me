var lambda = "λ";

var current;
var currentIndex;
var string;

function parseText(txt)
{
	string = txt;
	currentIndex = -1;
	scan();
	var result = expr();

	if (currentIndex != string.length)
	{
		alert("got some extra");
	}
	
	return result;
}

function scan()
{
	if (!canScan())
	{
		alert("ended a bit early there");
		throw "whoops";
	}
	current = string[++currentIndex];
}

function ignoreWS()
{
	//remove leading whitespace
	while (current == " ")
	{
		scan();
	}
}

function canScan()
{
	return (currentIndex < string.length);
}

function appl()
{
	var node = {};
	node.type = "a";
	
	expect("(");
	node.fnc = expr();
	node.arg = expr();
	expect(")");
	
	return node;
}

function name()
{
	ignoreWS();
	
	var node = {};
	node.type = "n";
	node.value = "";
	
	while (/^[0-9A-Za-z|-]+$/.test(current) && canScan()) //allow only alphanumeric
	{
		node.value += current;
		scan();
	}
		
	return node;
}

function expect(chr)
{
	if (current != chr)
	{
		alert("error, expecting '"+chr+"' at column "+currentIndex);
		throw "whoops";
	}
	scan();
}

function fnc()
{
	var node = {};
	node.type = "f";
	
	expect(lambda);
	
	node.arg = name().value;
	
	expect(".");
	
	node.body = expr();
	
	return node;
}

function expr()
{
	var node;
	
	ignoreWS();
	
	if (current == lambda)
	{
		node = fnc();
	}
	else if (current == "(")
	{
		node = appl();
	}
	else
	{
		node = name();
	}
	
	return node;
}
