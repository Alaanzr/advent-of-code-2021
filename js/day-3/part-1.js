const { read } = require("../utils/read");

(async () => {
  const data = await read(`${__dirname}/data`);

  const gammaBits = [];
  const epsilonBits = [];

  const length = 12;
  const bitMap = {};

  // build a counter for each index in the binary sequence
  for (let i = 0; i < length; i++) {
    bitMap[i] = { 0: 0, 1: 0 };
  }

  // increment the number of 0 or 1 occurrences for each index in the binary sequence
  for (let i = 0; i < data.length; i++) {
    const bits = data[i];

    for (let j = 0; j < bits.length; j++) {
      const bit = Number(bits[j]);
      bitMap[j][bit]++;
    }
  }

  Object.entries(bitMap).forEach(([index, result]) => {
    const { 0: num0s, 1: num1s } = result;

    const is0BitMostCommon = num0s > num1s;

    gammaBits.push(is0BitMostCommon ? 0 : 1);
    epsilonBits.push(is0BitMostCommon ? 1 : 0);
  });

  const gamma = parseInt(gammaBits.join(""), 2);
  const epsilon = parseInt(epsilonBits.join(""), 2);

  console.log(`result: ${gamma * epsilon}`);
})();
