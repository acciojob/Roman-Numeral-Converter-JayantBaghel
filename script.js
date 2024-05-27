function convertToRoman(num) {
	if (num < 0 || num > 100000) {
        return "Input out of range";
    }
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here
	let result = '';
    
    for (let [symbol, value] of obj) {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
