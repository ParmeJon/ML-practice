const trainingData1 = [
  { input: "I really like you.", output: { flirty: 1 } },
  { input: "Want to come over?", output: { flirty: 1 } },
  { input: "You're really cute", output: { flirty: 1 } },
  { input: "You're a cool dude", output: { casual: 1 } },
  { input: "Want to get food bro?", output: { casual: 1 } },
  { input: "Friends forever!", output: { casual: 1 } },
  { input: "You're soooo hot", output: { flirty: 1 } },
  { input: "Tryna chill?", output: { casual: 1 } },
  { input: "Sweet dreams!", output: { flirty: 1 } },
  { input: "Nobody's home right now", output: { flirty: 1 } },
  { input: "Yo where you at?", output: { casual: 1 } },
  { input: "You're like family to me", output: { casual: 1 } }
];

const trainingData2 = [
  { input: "I really like you.", output: "flirty" },
  { input: "Want to come over?", output: "flirty" },
  { input: "You're really cute", output: "flirty" },
  { input: "You're a cool dude", output: "casual" },
  { input: "Want to get food bro?", output: "casual" },
  { input: "Friends forever!", output: "casual" },
  { input: "You're soooo hot", output: "flirty" },
  { input: "Tryna chill?", output: "casual" },
  { input: "Sweet dreams!", output: "flirty" },
  { input: "Nobody's home right now", output: "flirty" },
  { input: "Yo where you at?", output: "casual" },
  { input: "You're like family to me", output: "casual" }
];

module.exports = {trainingData1, trainingData2};