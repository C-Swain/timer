//No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
// we might if am if statement that is there is no input no action is require 



//An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
// maybe we can do a for( loop) and for each arguement we set a timer for th seconds requested process.stdout.write('\x07');


//An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.
// we should be able to incorporate this in the same if statment 
const args = process.argv.slice(2)
const array = args;
const timer = () => {
for(arg in array) {
	if( arg !== NaN || arg >= 0)
	setTimeout(() => {
		process.stdout.write('\x07');
	}, arg * 1000);
}
};

timer();