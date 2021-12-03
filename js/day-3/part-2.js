const { read } = require("../utils/read");

const buildBitmap = (data) => {
  const length = 12;
  const bitMap = {};

  for (let i = 0; i < length; i++) {
    bitMap[i] = { 0: 0, 1: 0 };
  }

  for (let i = 0; i < data.length; i++) {
    const bits = data[i];

    for (let j = 0; j < bits.length; j++) {
      const bit = Number(bits[j]);
      bitMap[j][bit]++;
    }
  }

  return bitMap;
};

const buildReading = async (isOxygenReading) => {
  let data = await read(`${__dirname}/data`);
  let index = 0;

  while (data.length > 1) {
    const bitMap = buildBitmap(data);

    const { 0: num0s, 1: num1s } = bitMap[index];

    const commonValue = isOxygenReading ? "1" : "0";
    const uncommonValue = isOxygenReading ? "0" : "1";

    if (num1s >= num0s) {
      data = data.filter((sequence) => sequence.charAt(index) === commonValue);
    } else {
      data = data.filter(
        (sequence) => sequence.charAt(index) === uncommonValue
      );
    }

    index += 1;
  }

  return data;
};

(async () => {
  const [oxygenRating] = await buildReading(true);
  const [co2Rating] = await buildReading(false);

  console.log(`result: ${parseInt(oxygenRating, 2) * parseInt(co2Rating, 2)} `);
})();
