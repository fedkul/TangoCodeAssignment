/**
 * authored by Luke Fischer
 * 10/10/2016
 */

function intersect(rect1, rect2){
	//check if either rectangles origins are within each others bounds
	if((rect2.x <= rect1.x && rect1.x <= (rect2.x + rect2.width)) 
			|| (rect1.x <= rect2.x && rect2.x <= (rect1.x + rect1.width))){
		//check if the x origin of either rectangle is within the other's bounds
		if((rect2.y <= rect1.y && rect1.y <= (rect2.y + rect2.height)) 
				|| (rect1.y <= rect2.y && rect2.y <= (rect1.y + rect1.height))){
			//check if the y origin of either rectangle is within the other's bounds
			return true;
		}
	}
	return false;
}

/**
 * Though Process:
 * My first attempt at this assignment I had a series of if statements designed around catching
 * rectangles that were fully outside  of each other, meaning they could not intersect.  After 
 * setting up the function in this way I realized it did not account for as many situations as I originally
 * thought and I would have to keep adding more conditionals to make it work.  I scrapped my first plan
 * and reconsidered how I wanted to address the conditionals.  I flipped my thinking and decided to check 
 * and see if the origin of either rectangle was within an "area of influence" of the other.  What I mean
 * by this is that two rectangles can only intersect if their origins are within the other's vertical or
 * horizontal influence.  I used the example rectangles from the assignment pdf since I did not want to waste
 * too much time making a random generation function for rectangles. I have also included a PNG in the 
 * project folder that holds some visual examples I used to help me sort out the conditional statements.
 * 
 */