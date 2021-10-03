
// Create canvas variable
var canvas = new fabric.Canvas("myCanvas");
//Set initial positions for ball and hole images.
bally = 0;
ballx=0;
holey = 400;
holex=800;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	// write code to Upload golf image on the canvas
	fabric.Image.fromURL("golf-h.png", function(Img){
		hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top: holey,
			left: holex

		})
		canvas.add(hole_obj);
	});
	new_image();
}

function new_image()
{
	// write code to Upload ball image on canvas
	fabric.Image.fromURL("ball.png", function(Img){
		ball_obj = Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top: bally,
			left: ballx

		})
		canvas.add(ball_obj);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	if((ballx == holex) && (bally==holey)){
		canvas.remove(ball_obj);
		document.getElementById("hd3").innerHTML="You Win! You hit the goal!";
		document.getElementById("myCanvas").style.borderColor="red";
	}
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		// Write a code to move ball upward.
		if(bally > 5){
			bally -= block_image_height;
			console.log("block image height: "+block_image_height);
			console.log("Down Arrow Pressed: x = "+ballx+", y = "+bally);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function down()
	{
		 // Write a code to move ball downward.
		 if(bally <= 450){
			 bally += block_image_height;
			 console.log("block image height: "+block_image_height);
			 console.log("Down Arrow Pressed: x = "+ballx+", y = "+bally);
			 canvas.remove(ball_obj);
			 new_image();
		 }
	}

	function left()
	{
		if(ballx >5)
		{
			// Write a code to move ball left side.
			ballx -= block_image_width;
			console.log("block image width: "+block_image_width);
			console.log("Down Arrow Pressed: x = "+ballx+", y = "+bally);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function right()
	{
		if(ballx <=1050)
		{
			// Write a code to move ball right side.
			ballx += block_image_width;
			console.log("block image width: "+block_image_width);
			console.log("Down Arrow Pressed: x = "+ballx+", y = "+bally);
			canvas.remove(ball_obj);
			new_image();
		}
	}
	
}

