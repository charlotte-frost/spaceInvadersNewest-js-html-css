/*
this is the array which included 21 images of the missile shot, from the html page */
var missileArray = [document.getElementById("playerMiss0"),document.getElementById("playerMiss1"),document.getElementById("playerMiss2"),document.getElementById("playerMiss3"),document.getElementById("playerMiss4"),document.getElementById("playerMiss5"),document.getElementById("playerMiss6"),document.getElementById("playerMiss7"),document.getElementById("playerMiss8"),document.getElementById("playerMiss9"),document.getElementById("playerMiss10"),document.getElementById("playerMiss11"),document.getElementById("playerMiss12"),document.getElementById("playerMiss13"),document.getElementById("playerMiss14"),document.getElementById("playerMiss15"),document.getElementById("playerMiss16"),document.getElementById("playerMiss17"),document.getElementById("playerMiss18"),document.getElementById("playerMiss19"),document.getElementById("playerMiss20")]
/* 
this is where the objects are set up, there is one object to move the tank(position) and there is an object to move the missile so it will shoot at the
position where the tank is when the space bar is pressed, in each object there is left, these are both set to 0 so when the page is ran both the tank and 
the missiles will be on the very left side of the page
*/
let position = {
	left: 0,
};
let positionMiss = {
	left: 103,
	missBottom: 800,
}
/* 
this is to find how many items are in the array of missiles, 
then it will start a loop to loop round arraylength times(21) and it will hide each of the missile*/
var arrayLength = missileArray.length
for (i=0; i<arrayLength;i++)
{
	console.log(missileArray[i])
	document.getElementById(`playerMiss${i}`).style.visibility = 'hidden'
}
/*
this is for when the left arrow key is pressed so the left in the position object and the missilePosition will - 10 then call up the function 
to actually get the tank and hidden missiles to moveto t he left, right arrow us pressed so the left in the position object and the missilePosition will + 10 
then it will actually move the tank/hidden missile to the right , or spacebar is pressed which will then call up the fire missile loop
*/
var playerTest = document.getElementById("player")
document.onkeydown = function(e)
{
	console.log(e.code);
	if (e.code == "ArrowRight")
	{
		console.log("player right")
		position.left = position.left + 10
		positionMiss.left = positionMiss.left +10
		actualMovement();
		moveMissile()
	}
	else if (e.code == "ArrowLeft")
	{
		console.log("player left")
		position.left = position.left - 10
		positionMiss.left = positionMiss.left -10
		actualMovement();
		moveMissile()
	}
	else if (e.code == "Space")
	{
		console.log("space bar-shoot")
		fireMissile()
	}
}
/*this function get the tank to move using the position.left object as the value of left will have changed when the key on the keyboard had been pressed */
function actualMovement(){
  console.log("player move")
  playerTest.style.left = position.left + "px"
}
/*
this is a seperate function to move the missile before the have been fired. in this we to involve count, count will be incremented each time a missile is fires. 
the for loop will start at the count value and loop round untill its at the end of the array, on each loop it will move the hidden unfired missile left or right
depending on which key is pressed, it also positions the missile are the correct place to be fired.
if counts more than the array length it will set count equal to 0 and set the missiles equal to 0

--count needs to be used and incremented each time a missles fired because it will only move the unfired missile to the position of the tank, and not move the
fired missile to the left/right while going up--
**i think the bottom position and the start left position on this will have to be changed because that position was correct(coming from the top of the tank)
before we put it all together**
 */
function moveMissile(){
	for (i=count; i<arrayLength;i++)
	{
		document.getElementById(`playerMiss${i}`).style.left = positionMiss.left + "px"
		document.getElementById(`playerMiss${count}`).style.bottom = positionMiss.missBottom 
	}
	if (count > arrayLength)
	{
		count = 0
		document.getElementById(`playerMiss${count}`).style.visibility = 'hidden'
	}
}
/* this will check if the count is equal to 21, count is for how many missiles have been fired, if the count equal to 21, it will loop round 21 times and change 
the position of the missiles to where the tank is
-- when it goes past 21 and restarts the loops back to missile 1, it does the jumpy thing which i dont know how to fix, maybe another function that checks if the
position it at 300 then if it is it should set the position to whatever the tank position --*/
function loopMissiles()
{
	if (count == 21)
	{
		for (i = 0; i < count; i++)
		{
			document.getElementById(`playerMiss${i}`).style.left = positionMiss.left					///ERROR
			document.getElementById(`playerMiss${i}`).style.bottom = positionMiss.missBottom 
		}
		count = 0
	}
}
/*
this function is to fire the missile, it will set the visibility of the current missile to be fired to visible, and set missile equal to that item(image)
pos is the position, the psoition is 5000 because it wants to start at the bottom of the page, then it calls up the setIntervsl function thing, 10 is the speed,
the higher the nimber then slower the bullet will move, if the position equals - 300 its at the top of the page and the missile will be hidden, if not the position
of the missile is decremented  and the missile is moved to the position
count is incremented each time this functions called up. */
function fireMissile(){
	document.getElementById(`playerMiss${count}`).style.visibility = 'visible'
	var missile = document.getElementById(`playerMiss${count}`);
	var pos = 5000;
	var id = setInterval(frame, 10);
	function frame()
	{
		if (pos == -300)
		{
			missile.style.visibility = 'hidden'
			pos = 0
		}else
		{
			pos--;
			missile.style.top = pos + 'px'
		}
	}
	count = count+1
	pos = 1100
	loopMissiles()						//ERROR
}
var count = 1




