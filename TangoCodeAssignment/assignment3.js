/**
 * authored by Luke Fischer
 *10/11/2016 
 */



function reversal(num){
	var tmp = num;
	var letters = ["a","c","d","e","g","i","l","m","n","o","p",
		"r","s","t","u","w"];
	var result = "";
	//the length of the string is 7 therefore we will iterate only seven times
	for (var i = 0; i < 7; i++){
		tmp = tmp / 37;
		//if the number is low enough to be subtracted to 7 with a specific index, catch it and reduce to 7
		if (Math.round(tmp) <= 22){
			tmp = Math.round(tmp);
			var letterIndex = tmp - 7; 
			tmp -= letterIndex;
			result = letters[letterIndex] + result;
		}
		else{
			//randomly choose an index for a letter in the letters array
			var letterIndex = Math.floor(Math.random() * 16); 
			tmp -= letterIndex;
			result = letters[letterIndex] + result;
		}
	}
	console.log(tmp + " " + result);
	if (tmp == 7) return result;
	return reversal(num);
}

/**
 * Thought Process:
 * My first thought in solving this problem was to reverse the process of the original function. I set up
 * the function to reduce the input number by dividing it by 37 and then subtracting a random number that 
 * corresponds with the indexes in the letters array. After 7 iterations, the number of letters in the
 * requested string, the function checks to see if the remaining value is 7 which will indicate if it is a 
 * fitting string. This ended up causing an issue where the function would not stop recursing.  This 
 * problem was caused by the function not ending with a whole number. I came up with a solution by adding a
 * conditional to the function that will catch when the number reaches a point where a specific index
 * will get the final number down to 7 exactly. After adding this conditional the function usually succeeds
 * on the first recursion (although I kept it as a recursive program just in case).
*/
