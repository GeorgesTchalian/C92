
var canvas = new fabric.Canvas('myCanvas'); 

playerX = 10; 
playerY = 10;

blockImageWidth = 30; 
blockImageHeight = 30; 

var playerObject= "";
var blockImageObject= "";

function player_update()
{
	fabric.Image.fromURL("player.png", function(Img) {
	playerObject = Img;
	playerObject.scaleToWidth(150);
	playerObject.scaleToHeight(140);
	playerObject.set({top:playerY, left:playerX});
	canvas.add(playerObject);
	});
}

function new_image(getImage)
{
	fabric.Image.fromURL(getImage, function(Img) {
	blockImageObject = Img;
	blockImageObject.scaleToWidth(blockImageWidth);
	blockImageObject.scaleToHeight(blockImageHeight);
	blockImageObject.set({top:playerY,left:playerX});
	canvas.add(blockImageObject);
	});

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if(e.shiftKey == true && keyPressed == '80')
{
	console.log("p and shift pressed together");
	blockImageWidth = blockImageWidth + 10;
	blockImageHeight = blockImageHeight + 10;
	document.getElementById("current_width").innerHTML = blockImageWidth;
	document.getElementById("current_height").innerHTML = blockImageHeight;	
}
if(e.shiftKey && keyPressed == '77')
{
	console.log("m and shift pressed together");
	blockImageWidth = blockImageWidth - 10;
	blockImageHeight = blockImageHeight - 10;
	document.getElementById("current_width").innerHTML = blockImageWidth;
	document.getElementById("current_height").innerHTML = blockImageHeight;
}

	if(keyPressed == '38')
	{
		up();
		console.log("cima");
	}
	if(keyPressed == '40')
	{
		down();
		console.log("baixo");
	}
	if(keyPressed == '37')
	{
		left();
		console.log("esquerda");
	}
	if(keyPressed == '39')
	{
		right();
		console.log("direita");
	}
	if(keyPressed == '87')
	{
		new_image('wall.jpg'); 
		console.log("w");
	}
	if(keyPressed == '71')
	{
		new_image('ground.png'); 
		console.log("g");
	}
	if(keyPressed == '76')
	{
		new_image('light_green.png'); 
		console.log("l");
	}
	if(keyPressed == '84')
	{
		new_image('trunk.jpg'); 
		console.log("t");
	}
	if(keyPressed == '82')
	{
		new_image('roof.jpg'); 
		console.log("r");
	}
	if(keyPressed == '89')
	{
		new_image('yellow_wall.png'); 
		console.log("y");
	}
	if(keyPressed == '68')
	{
		new_image('dark_green.png'); 
		console.log("d");
	}
	if(keyPressed == '85')
	{
		new_image('unique.png'); 
		console.log("u");
	}
	if(keyPressed == '67')
	{
		new_image('cloud.jpg'); 
		console.log("c");
	}
	
}
function up()
{
	if(playerY >=0)
	{
		playerY = playerY - blockImageHeight;
		console.log("altura da imagem do bloco = " + blockImageHeight);
		console.log("Quando a seta para cima é pressionada, X =  " + playerX + " , Y = "+playerY);
		canvas.remove(playerObject);
		player_update();
	}
}

function down()
{
	if(playerY <=500)
	{
		playerY = playerY + blockImageHeight;
		console.log("altura da imagem do bloco = " + blockImageHeight);
		console.log("Quando a seta para baixo é pressionada, X =  " + playerX + " , Y = "+playerY);
		canvas.remove(playerObject);
		player_update();
	}
}

function left()
{
	if(playerX >0)
	{
		playerX = playerX - blockImageWidth;
		console.log("altura da imagem do bloco = " + blockImageWidth);
		console.log("Quando a seta para a esquerda é pressionada, X =  " + playerX + " , Y = "+playerY);
		canvas.remove(playerObject);
		player_update();
	}
}

function right()
{
	if(playerX <=850)
	{
		playerX = playerX + blockImageWidth;
		console.log("altura da imagem do bloco = " + blockImageWidth);
		console.log("Quando a seta para a direita é pressionada, X =  " + playerX + " , Y = "+playerY);
		canvas.remove(playerObject);
		player_update();
	}
}
