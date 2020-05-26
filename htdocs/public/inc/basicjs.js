alert("This site is under heavy construction!");
let counter = 0;
let i = 0;
function asdf(num1, num2)
{
	var bing = num1 + num2;
	//var i = 0;
	//whileloop
	while(i < 50)
	{
			bing += 1;
			i++;
	}

	return bing;
}
function dosome(arg1)
{
	//do while loop
	do{
		document.write("<h1>" + asdf((Math.random()*10),(Math.random()*10)) + "</h1>");
		counter++;
	}while(counter < arg1)
	
	//forloop
	for(var i = 0; i<10; i++)
	{
		document.write("<h1>" + i + "</h1>");
	}
}

//arrays
function arrayfun(){
	var myShopping = [];
	myShopping.push('Milk', 'Eggs', 'Bacon');
	myShopping.unshift('Call of duty 24', 'Car');
	var lastItem = myShopping.pop();
	var firstItem = myShopping.shift();
	document.write("<p>"+ lastItem + "</p>");
	document.write("<p>"+ firstItem + "</p>");
	
	for(var i = 0; i < myShopping.length; i++){
		document.write("<p>"+ myShopping[i] + "</p>");	
		//document.write("<p>"+ myShopping[i] + "</p>");
	}
	
	document.write("<p>"+ myShopping.join(', ') + "</p>");
}

function print(message){
		//document.write('<p>' + message + '</p>'); <--- old style...
		var outputDiv = document.getElementById('somethingrandom');
		outputDiv.innerHTML = message;
}
	
function shopping(){
	var inStock = ["eggs", "chicken", "milk", "cheese", "bread", "lettuce"];
	var search;

	

	while(true)
	{
		search = prompt("type list for list. type quit to exit.");
		search = search.toLowerCase();
		if(search === 'quit'){
			break;	
		} else if( search === 'list') {
			print( inStock.join(', '));
		}
		else{
			if( inStock.indexOf( search ) > -1){
				print('Yes, we have ' + search + ' in the store');
			} else {
				print( search + ' is not in stock.');
			}
			
		}
	}
}
function doubleshopping(){
	//two dimensional
	//shoping got [category][item]
var shopping= [
["milk", "eggs", "bread"],
["pc", "ps4"],
["hammer"]
];
	var itemthing;
	for(let x = 0; x < shopping.length; x++){
		for(let y = 0; y < shopping[x].length; y++){
			document.write("<h1>" + shopping[x][y] + "</h1>");
		}
	}
}

var someobject = {
	name: "Dan",
	age: 32,
	grades: [100,100,100,3000],
	skills: ["C", "C++", "Java", "C#", "HTML", "CSS", "JavaScript", "PHP"]
};

for(const propName in someobject){
	console.log(propName);
	console.log(someobject[propName]);
}
//Use these under instead of var.
const isforconstant = 1; //after created cannot be given a new value.
let score = 0; //works just like var.