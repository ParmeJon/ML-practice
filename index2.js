const brain = require("brain.js");
const fs = require("fs");
const { trainingData3 } = require("./data.js");
const trainedNet = require("./flirty-trained-thirdNet.js");

// let thirdNet = new brain.recurrent.LSTM();
// thirdNet.train(trainingData3, {log: true});

// fs.writeFileSync(
//   "flirty-trained-thirdNet.js",
//   `module.exports = ${thirdNet.toFunction().toString()}`
// );

// console.log(thirdNet.run("I like you"));

console.log(trainedNet("i like you"))