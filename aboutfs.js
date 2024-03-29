import fs from "fs/promises";
import path from "path";

const readPjson = async () => {
  const pjsonPath = new URL("./package.json", import.meta.url);
  const json = JSON.parse(await fs.readFile(pjsonPath, "utf-8"));
  console.log(json);
};
// readPjson();

readPjson();
const writeFile = async () => {
  const filePath = new URL("./write.js", import.meta.url);
  await fs.writeFile(filePath, "console.log('Hello, World!');");
};
// writeFile();
