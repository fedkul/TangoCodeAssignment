/**
 * Authored by Luke Fischer
 * 10/10/2016
 */

//generate arrays for testing
function createArray(size){
	var newArray = [];
	while (newArray.length < size){
		//push random number into array between 0 and 10 times the size of the array
		newArray.push(Math.floor(Math.random() * (size*10)))
	}
	return newArray;
}

//find largest and smallest values in N time (linear)
function differenceCalculatorMethodOne(arrayOfNumbers){
	var largest = arrayOfNumbers[0];
	var smallest = arrayOfNumbers[0];
	
	for(var i = 0; i < arrayOfNumbers.length; i++){
		if(arrayOfNumbers[i] > largest)largest = arrayOfNumbers[i];
		if(arrayOfNumbers[i] < smallest)smallest = arrayOfNumbers[i];
	}
	console.log(largest);
	console.log(smallest);
	return largest - smallest;
}

//find largest and smallest values based off of the js array sort method (O(n log n) for numbers, supposedly)
function differenceCalculatorMethodTwo(arrayOfNumbers){
	arrayOfNumbers.sort(function(a, b){return a - b});
	console.log(arrayOfNumbers[arrayOfNumbers.length - 1]);
	console.log(arrayOfNumbers[0]);
	return arrayOfNumbers[arrayOfNumbers.length - 1] - arrayOfNumbers[0];
}

/**
 * Thought Process:
 * My very first thought after reading the assignment was to pick out the largest and smallest values 
 * within an array and subtract them as they would naturally give the largest difference.  I believed
 * this would be the best way to approach this problem as it would at worst function in linear time (N), 
 * whereas calculating the differences between all of the numbers would be factorial time (N!). My very
 * first solution was to use a loop function to iterate through the array and keep track of the largest 
 * and smallest values it comes across, returning the difference of these values at the end.  After that 
 * I realized that a simple way of locating the largest and smallest values in an array is to pull the
 * first and last indexes after the array is sorted. Thus my second function uses the built in sort method 
 * to sort the array and then return the difference between the first and last indexes.  I finished
 * up  this Javascript file by implementing a random number array generator so that I could test effectively.
 *
**/