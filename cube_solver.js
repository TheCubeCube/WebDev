var red = "red"
var blue = "blue"
var orange = "orange"
var green = "green"
var yellow = "yellow"
var white = "white"
var front = 0;
var left = 1;
var back = 2;
var right = 3;
var top = 4;
var bot = 5;


var rubiks_cube = [
	[[red,red,red],[red,red,red],[red,red,red]], //front
	[[blue,blue,blue],[blue,blue,blue],[blue,blue,blue]], //left
	[[orange,orange,orange],[orange,orange,orange],[orange,orange,orange]], //back
	[[green,green,green],[green,green,green],[green,green,green]], //right
	[[yellow,yellow,yellow],[yellow,yellow,yellow],[yellow,yellow,yellow]], //top
	[[white,white,white],[white,white,white],[white,white,white]] //bot
]

function twist_row_left(row){
	new_cube = rubiks_cube
	new_cube[front][row] = rubiks_cube[right][row];
	new_cube[right][row] = rubiks_cube[back][row];
	new_cube[back][row] = rubiks_cube[left][row];
	new_cube[left][row] = rubiks_cube[front][row];
	if(row == 0){
		
	}
	
	if(row == 2){
		
	}
	//in the same row
	// front = right
	// right = back
	// back = left
	// left = front
	rubiks_cube = new_cube
}

function twist_row_right(row){
	
}

function twist_column_clockwise(col){
	
}

function twist_column_counterclockwise(col){
	
}

