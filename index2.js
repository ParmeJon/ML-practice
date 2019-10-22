const brain = require("brain.js");
const fs = require("fs");
const { trainingData3 } = require("./data/data.js");
const trainedNet = require("./data/flirty-trained-thirdNet.js");

// let thirdNet = new brain.recurrent.LSTM();
// thirdNet.train(trainingData3, {log: true});

// fs.writeFileSync(
//   "flirty-trained-thirdNet.js",
//   `module.exports = ${thirdNet.toFunction().toString()}`
// );

// console.log(thirdNet.run("I like you"));

console.log(trainedNet("you're soooo cute"))