const brain = require('brain.js')
const {trainingData1} = require('./data.js')


let trainedNet 

// const config = {
//   iterations: 10000,
//   binaryThresh: 0.5,
//   hiddenLayers: [], // array of ints for the sizes of the hidden layers in the network
//   activation: "sigmoid", // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh'],
//   leakyReluAlpha: 0.01 // supported for activation type 'leaky-relu'
// };

function encode(arg) {
      const newArr = [];
      arg.split("").forEach(c => {
        newArr.push(c.charCodeAt(0) / 255);
      });
      while (newArr.length < 7) {
        newArr.push(0);
      }
      return newArr;
}

function processTrainingData(data) {
    return data.map(d => {
        return {
            input: encode(d.input),
            output: d.output
        }
    })
}

function fixLengths(data) {
  let maxLengthInput = -1;
  for (let i = 0; i < data.length; i++) {
    if (data[i].input.length > maxLengthInput) {
      maxLengthInput = data[i].input.length;
    }
  }
  for (let i = 0; i < data.length; i++) {
    while (data[i].input.length < maxLengthInput) {
      data[i].input.push(0);
    }
  }
  return data;
}  

function train(data) {
    const net = new brain.NeuralNetwork()
    net.train(serialize(data), {log: true})
    trainedNet = net.toFunction()
    console.log('finished training..')
}

function serialize(data) {
  return fixLengths(processTrainingData(data));
};

function execute(input) {
    let results = trainedNet(encode(input))
    return results
}


train(trainingData1)
console.log(execute("If you come over, I'll think about it"));