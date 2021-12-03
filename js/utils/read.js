const { readFile } = require("fs");
const { promisify } = require("util");

const read = async (path) => {
  const data = await promisify(readFile)(path, "utf8");

  return data.split(/\n/);
};

module.exports = { read };
