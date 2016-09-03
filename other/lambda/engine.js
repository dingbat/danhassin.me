var full;
var attemptsLeft;
var showExpansions

function copy(node)
{
	var n = {};
	n.type = node.type;
	n.color = node.color;
	if (node.type == "n")
	{
		n.value = node.value;
	}
	if (node.type == "f")
	{
		n.arg = node.arg;
		n.body = copy(node.body);
	}
	if (node.type == "a")
	{
		n.arg = copy(node.arg);
		n.fnc = copy(node.fnc);
	}
	return n;
}


function nameIsFormalArg(name, formal)
{
	return (name.type == "n" && name.value == formal);
}

function set(node, formal, replace, initial)
{
	if (node.type == "f")
	{
		if (!initial)
		{
			if (node.arg === formal)
				return;
		}

		if (nameIsFormalArg(node.body, formal))
			node.body = copy(replace);
		else
			set(node.body, formal, replace);
	}

	if (node.type == "a")
	{
		if (nameIsFormalArg(node.fnc, formal))
			node.fnc = copy(replace);
		else
			set(node.fnc, formal, replace);
		
		if (nameIsFormalArg(node.arg, formal))
			node.arg = copy(replace);
		else
			set(node.arg, formal, replace);
	}

	replace.color = "red";
}

function expandName(name)
{
	if (name.type == "n")
	{
		for (i = 0; i < presets.length; i++)
		{
			var preset = presets[i];
			if (preset[0] == name.value)
			{
				return expandName(copy(preset[1])); //recurse-expand in case it actually names another named guy
			}
		}
	}
	return name;
}

function reduce(node)
{
	attemptsLeft--;
	if (attemptsLeft <= 0)
		return;

	if (node.type == "a")
	{
		if (node.fnc.type == "a")
		{
			if (isAppliable(node.fnc))
			{
				reduce(node.fnc);
			}
			else if (isAppliable(node.arg))
			{
				reduce(node.arg);
			}
		}
		else if (node.fnc.type == "f")
		{
			set(node.fnc, node.fnc.arg, node.arg, true);
			node.color = "orange";
			node.type = node.fnc.body.type;
			
			if (node.type == "n")
			{
				node.value = node.fnc.body.value;
			}
			else if (node.type == "f")
			{
				node.body = node.fnc.body.body;
				node.arg = node.fnc.body.arg;
			}
			else if (node.type == "a")
			{
				node.arg = node.fnc.body.arg;
				node.fnc = node.fnc.body.fnc;
			}
		}
		else if (node.fnc.type == "n")
		{
			if (showExpansions)
				print(" ==");
				
			expand(node.fnc);
			
			if (showExpansions)
				print_node(full);
				
			if (node.fnc.type != "n")
			{
				reduce(node);
			}
		}
	}
}

function expand(name)
{
	var expanded = expandName(name);
	
	name.type = expanded.type;
	if (name.type == "n")
	{
		name.value = expanded.value;
	}
	else if (name.type == "f")
	{
		name.body = expanded.body;
		name.arg = expanded.arg;
	}
	else if (name.type == "a")
	{
		name.fnc = expanded.fnc;
		name.arg = expanded.arg;
	}
	name.color = "#0099FF";
}

function isAppliable(app)
{
	if (app.type != "a")
	{
		return false;
	}
	var func = expandName(app.fnc);
	if (func.type == "a")
	{
		return isAppliable(func);
	}
	return (func.type != "n");
}

function super_reduce(node)
{
	if (node.type == "n")
	{
		if (expandName(node) === node || 
		node.value == "true" || 
		node.value == "false" || 
		node.value == "zero")
			return false;
		
		expand(node);
		print(" ==");
		return true;
	}
	else
	{
		if (node.type == "f")
		{
			return super_reduce(node.body);
		}
		else if (node.type == "a")
		{
			if (isAppliable(node))
			{
				reduce(node);
				print(" =>");
				return true;
			}
			
			if (super_reduce(node.arg))
				return true;

			return super_reduce(node.fnc);
		}
	}
	
	return false;
}

function evaluateFurther()
{
	if (showExpansions || getLeftmost(full).type == "n")
	{
		super_reduce(full);
	}
	else
	{
		print(" =>");
	}	
	print_node(full);
}

function getDump()
{
	return dump;
}

function evaluateString(string, fully)
{
	dump = "";

	var exp = parseText(string);
	exp.color = "#33FF00";

	print_node(exp);

	evaluate(exp, fully);
}

function getLeftmost(node)
{
	if (node.type == "a")
		return getLeftmost(node.fnc);
	
	return node;
}

function drill()
{
	print("<br><br>");
	evaluate(full, showExpansions);
}

function evaluate(node, fully)
{
	showExpansions = fully;
	full = node;
	
 	attemptsLeft = 9000;
	
	while (full.type == "a" && isAppliable(full) && attemptsLeft > 0)
	{
		reduce(full);
		
		if (showExpansions || getLeftmost(full).type == "n")
		{
			print(" =>");
			print_node(full);
		}
	}
	
	if (attemptsLeft <= 0)
	{
		print("<br><br>this can get really verbose, can't it? this computation was halted, for your browser's sake.&nbsp;<button type='button' onclick='keepGoing()'>no, keep going!</button>");
	}
	
	return full;
}