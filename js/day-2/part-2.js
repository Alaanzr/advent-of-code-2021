const { read } = require("../utils/read");

(async () => {
  let depth = 0;
  let horizontal = 0;
  let aim = 0;

  const data = await read(`${__dirname}/data`);

  for (let i = 0; i < data.length; i++) {
    const datum = data[i];

    let [action, number] = datum.split(" ");
    number = Number(number);

    if (action === "forward") {
      horizontal += number;
      depth += aim * number;
    }

    if (action === "down") {
      aim += number;
    }

    if (action === "up") {
      aim -= number;
    }
  }

  console.log(`result: ${horizontal * depth}`);
})();
