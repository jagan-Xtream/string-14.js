const readline = require('readline')
const inp = readline.createInterface({
  input: process.stdin
})
const userInput = []
inp.on("line", (data) => {
 userInput.push(data)
})
inp.on("close", () => {

//start-here
//Your code goes here â¦ replace this line with your code logic 
var S=(userInput)
console.log(...S)
//end-here
});
