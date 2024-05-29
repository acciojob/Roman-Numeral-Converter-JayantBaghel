function convertToRoman(num) {
	// Array of Roman numerals and their corresponding values
    const romanNumerals = [
        ['M', 1000], 
        ['D', 500], 
        ['C', 100], 
        ['L', 50], 
        ['X', 10], 
        ['V', 5], 
        ['I', 1]
    ];

    // Variable to store the resulting Roman numeral
    let result = '';
    
    // Iterate over the array of Roman numerals
    for (let [symbol, value] of romanNumerals) {
        // Calculate how many times the symbol can fit into the current number
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    // Return the resulting Roman numeral
    return result;
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
