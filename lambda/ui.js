/* Built-in functions */

var basic = ["basic",
["identity", "λx.x"], 
["self-apply", "λs. (s s)"],
["apply", "λfunc. λarg. (func arg)"],
["make-pair", "λfirst. λsecond. λfunc. ((func first) second)"],
["select-first", "λfirst. λsecond. first"],
["select-second", "λfirst. λsecond. second"]];

var logic = ["logic",
["and", "λx. λy. ((x y) false)"], 
["or", "λx. λy. ((x true) y)"],
["true", "select-first"],
["false", "select-second"]];

var nums = ["numbers",
["zero", "identity"], 
["iszero", "λn. (n select-first)"],
["succ", "λn. λs. ((s false) n)"],
["pred", "λn. (((iszero n) zero) (n select-second))"],
["one", "(succ zero)"]];

var algs = ["algs",
["add", "λa. λb. (((iszero b) a) ((add (succ a)) (pred b)))"],
["y", "λf. (λs. (f (s s)) λs. (f (s s)))"],
["addY", "(y λf. λa. λb. (((iszero b) a) ((f (succ a)) (pred b))))"],
["mult", "λa. λb. (((iszero b) zero) ((add a) ((mult a) (pred b))))"]];

var categories = [basic, logic, nums, algs];
var presets = [];

function dark(color)
{
	return color;
}

/* Evaluating an expression */

function updateAnswer()
{
	var dump = getDump();
	$('#ans').html(dump);
}

function begin()
{
	$('#more').show();	
	$('#ans').empty();

	var fullyExpand = $('#box').prop("checked");

	evaluateString($('#txt').val(), fullyExpand);
	updateAnswer();
}

function expandFurther()
{
	evaluateFurther();
	updateAnswer();
}

function keepGoing()
{
	drill();
	updateAnswer();
}


/* Preset management */

function replace(elm)
{
	var str = elm.value;
	if (str.indexOf("\\") > -1)
		elm.value = str.replace("\\", "λ");
}

function addPreset()
{
	var pn = $('#presetName');
	var p = $('#preset');

	add(pn.val(), p.val());

	pn.val("");
	p.val("");
}

function add(presetName, preset)
{
	var expression = parseText(preset);

	//make sure it doesn't already exist
	for (var j = 0; j < presets.length; j++)
		if (presets[j][0] == presetName)
			return;

	presets[presets.length] = [presetName, expression];

	$('#psets').append("<tr><td class='cat "+dark("color-light")+"'>"+presetName+"</td><td class='"+dark("color-dark")+"'>"+toString(expression)+"</td></tr>");

	$('#toggle-defs').show();
}

function addAll()
{
	for (var c = 0; c < categories.length; c++)
	{
		var category = categories[c];
		for (var i = 1; i < category.length; i++)
			add(category[i][0], category[i][1]);
	}
}

function toggleDefs()
{
	$('#psets').toggle();
	$('#hidden').toggle();
}

function toggleHelp()
{
	$('#help').toggle();
}

function generateButtons()
{
	var make_button = function (name, fnc) { 
		return "<button type='button' onclick='add(\""+name+"\",\""+fnc+"\")'>"+name+"</button>"; 
	};

	var elm = "";
	for (c = 0; c < categories.length; c++)
	{
		var category = categories[c];

		elm += "<tr><td class='cat-lam "+dark("color-ish")+"'>"+category[0]+":</td><td>";

		for (i = 1; i < category.length; i++)
			elm += make_button(category[i][0], category[i][1]);

		elm += "</td></tr>";
	}
	
	$('#buttons').prepend(elm);
}

$(document).ready(function()
{
	generateButtons();
});
