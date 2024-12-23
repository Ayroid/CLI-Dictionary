import { DictionaryResponse, Meaning } from "./types.ts";
import chalk from "npm:chalk";

export const formatDefination = (data: DictionaryResponse[]): string => {
  const entry = data[0];
  let output = "";

  output += chalk.bold.blue(`${entry.word.toUpperCase()}`);
  if (entry.phonetics[0]?.text) {
    output += chalk.gray(` ${entry.phonetics[0].text}\n`);
  }

  entry.meanings.forEach((meaning: Meaning) => {
    output += `\n${chalk.yellow(meaning.partOfSpeech)}\n`;

    meaning.definitions.forEach((defination, index) => {
      output += `${index+1}. ${defination.definition}\n`;

      if (defination.example) {
        output += chalk.italic.gray(`   Example: ${defination.example}\n`);
      }

      if (defination.synonyms.length > 0) {
        output += chalk.green(
          `   Synonyms: ${defination.synonyms.join(", ")}\n`
        );
      }

      if (defination.antonyms.length > 0) {
        output += chalk.red(`   Antonyms: ${defination.antonyms.join(", ")}\n`);
      }
    });
  });

  return output;
};
