interface Phonetic {
  text: string;
  audio?: string;
}

interface Definition {
  definition: string;
  example?: string;
  synonyms: string[];
  antonyms: string[];
}

interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
}

interface DictionaryResponse {
  word: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
}

export type { Meaning, Definition, DictionaryResponse, Phonetic };
