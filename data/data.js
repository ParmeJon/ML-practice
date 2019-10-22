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
  { input: "You're like family to me", output: { casual: 1 } },
  { input: "You first!", output: { flirty: 1 } },
  { input: "You have really pretty eyes", output: { flirty: 1 } },
  { input: "I miss you", output: { flirty: 1 } },
  { input: "If you come over, I'll think about it", output: { flirty: 1 } }
];

const trainingData2 = [
  { input: "I really like you.", output: [1] },
  { input: "Want to come over?", output: [1] },
  { input: "You're really cute", output: [1] },
  { input: "You're a cool dude", output: [0] },
  { input: "Want to get food bro?", output: [0] },
  { input: "Friends forever!", output: [0] },
  { input: "You're soooo hot", output: [1] },
  { input: "Tryna chill?", output: [0] },
  { input: "Sweet dreams!", output: [1] },
  { input: "Nobody's home right now", output: [1] },
  { input: "Yo where you at?", output: [0] },
  { input: "You're like family to me", output: [0] },
  { input: "You first!", output: [1] },
  { input: "You have really pretty eyes", output: [1] },
  { input: "I miss you", output: [1] },
  { input: "If you come over, I'll think about it", output: [1] },
  { input: "Bro, i'm down.", output: [0] },
  { input: "down to do whatever", output: [0] },
  { input: "Let's go man!", output: [0] },
  { input: "Netflix and chill?", output: [1] },
  { input: "I'm not trying to go", output: [0] },
  { input: "You're so cute when you laugh", output: [1]},
  { input: "I really miss you", output: [1]}
];

const trainingData3 = [
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
  { input: "You're like family to me", output: "casual" },
  { input: "You first!", output: "flirty" },
  { input: "You have really pretty eyes", output: "flirty" },
  { input: "I miss you", output: "flirty" },
  { input: "If you come over, I'll think about it", output: "flirty" }
];

module.exports = {trainingData1, trainingData2, trainingData3};