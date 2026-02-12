import fs from "fs";
import { tokenize } from "./lexer.js";
import { parse } from "./parser.js";

const file = process.argv[2];

if (!file) {
  console.log("Uso: node src/main.js archivo.txt");
  process.exit(1);
}

const code = fs.readFileSync(file, "utf8");

const tokens = tokenize(code);

console.log("Tokens:", tokens);

try {
  parse(tokens);
} catch (err) {
  console.error("Error:", err.message);
}
