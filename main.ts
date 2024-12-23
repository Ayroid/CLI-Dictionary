#!/usr/bin/env node

import { dictionaryAPICall } from "./src/api.ts";
import { formatDefination } from "./src/formatter.ts";
import chalk from "npm:chalk";
import process from "node:process";

const word = process.argv[2];

if (!word) {
  console.error(chalk.red("Please provide a word"));
  process.exit(1);
}

if (word.includes(" ")) {
  console.error(chalk.red("Please provide a single word only"));
  process.exit(1);
}

try {
  const data = await dictionaryAPICall(word);
  console.log(formatDefination(data));
} catch (error) {
  if (error instanceof Error) {
    console.error(chalk.red(`Error: ${error.message}`));
  } else {
    console.error(chalk.red("An unknown error occurred"));
  }
  process.exit(1);
}