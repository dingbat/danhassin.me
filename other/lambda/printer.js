function toString(node)
{
	var retval = "";
	if (node.color != null)
		retval += "<span style='color:"+node.color+";'>";

	if (node.type == "n")
	{
		retval += node.value;
	}
	if (node.type == "a")
	{
		retval += "("+toString(node.fnc)+" "+toString(node.arg)+")";
	}
	if (node.type == "f")
	{
		retval += "λ"+node.arg+". "+toString(node.body);
	}
	
	if (node.color != null)
	{
		retval += "</span>";
		node.color = null;
	}
	
	return retval;
}

function print(html)
{
	dump += html;
}

function print_node(node)
{
	print("<br>"+toString(node));
}

/* Debug */
function prettyPrint(node, indent)
{
	var white = "";
	for (i = 0; i < indent; i++)
		white += " ";
		
	if (node.type == "a")
	{
		console.log(white+"appl");
		console.log(white+"fnc:");
		display(node.fnc, indent+5);
		console.log(white+"arg:");
		display(node.arg, indent+5);
	}
	if (node.type == "f")
	{
		console.log(white+"func");
		console.log(white+"arg: "+node.arg);
		console.log(white+"bod:");
		display(node.body, indent+5);
	}
	if (node.type == "n")
	{
		console.log(white+"name: "+node.value);
	}
}