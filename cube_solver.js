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
	let new_cube = JSON.parse(JSON.stringify(rubiks_cube))
	new_cube[front][row] = rubiks_cube[right][row];
	new_cube[right][row] = rubiks_cube[back][row];
	new_cube[back][row] = rubiks_cube[left][row];
	new_cube[left][row] = rubiks_cube[front][row];

	let face = 4
	
	if (row == 2) {
		face = bot;
	}
	if (row != 1) {
		new_cube[face][1][0] = rubiks_cube[face][0][0]
		new_cube[face][2][0] = rubiks_cube[face][1][0]
		new_cube[face][2][1] = rubiks_cube[face][2][0]
		new_cube[face][2][2] = rubiks_cube[face][2][1]
		new_cube[face][1][2] = rubiks_cube[face][2][2]
		new_cube[face][0][2] = rubiks_cube[face][1][2]
		new_cube[face][0][1] = rubiks_cube[face][0][2]
		new_cube[face][0][0] = rubiks_cube[face][0][1]
	}
	rubiks_cube = new_cube
}

function twist_row_right(row){
	for (let i = 0; i < 3; ++i) {
		twist_row_left(row)
	}
}


function twist_column_counterclockwise(col){
	let new_cube = JSON.parse(JSON.stringify(rubiks_cube))
	let faces = [front, 4, back, bot]
	for (let i = 0; i < 4; ++i) {
		for (let j = 0; j < 3; ++j) {
			new_cube[faces[i]][j][col] = rubiks_cube[faces[(i+3)%4]][j][col];
		}
	}
	let face = left
	
	if (col == 2) {
		face = right;
	}
	if (col != 1) {
		new_cube[face][0][0] = rubiks_cube[face][0][1]
		new_cube[face][0][1] = rubiks_cube[face][0][2]
		new_cube[face][0][2] = rubiks_cube[face][1][2]
		new_cube[face][1][2] = rubiks_cube[face][2][2]
		new_cube[face][2][2] = rubiks_cube[face][2][1]
		new_cube[face][2][1] = rubiks_cube[face][2][0]
		new_cube[face][2][0] = rubiks_cube[face][1][0]
		new_cube[face][1][0] = rubiks_cube[face][0][0]
	}
	rubiks_cube = new_cube


}

function twist_column_clockwise(col){
	for (let i = 0; i < 3; ++i) {
		twist_column_counterclockwise(col)
	}
}

function update_display() {
	console.log("updated display")
	console.log(rubiks_cube)
	let cells = document.getElementsByClassName("rubiks-square")
	for (let i = 0; i < 9; ++i) {
		cells[i].style.backgroundColor = rubiks_cube[front][Math.floor(i/3)][i%3];
	}
}

function random_move(){
	func_num = Math.floor(Math.random()*4)
	pos_num = Math.floor(Math.random()*3)
	funcs = [twist_row_right,twist_row_left,twist_column_clockwise,twist_column_counterclockwise]
	funcs[func_num](pos_num)
	
}