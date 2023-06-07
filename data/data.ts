export interface Word {
  id: number;
  word: string;
  hasGuessed: boolean;
}

export interface Alphabet {
  letter: string;
  isGuessed: boolean;
}

// export type CharObj = { letter: string; isVisible: boolean };

// export type Alphabet = { letter: string; isGuessed: boolean };

export const wordsArray: Word[] = [
  {
    id: 1,
    word: "PINEAPPLE",
    hasGuessed: false,
  },
  {
    id: 2,
    word: "RAINBOW",
    hasGuessed: false,
  },
  {
    id: 3,
    word: "COMPUTER",
    hasGuessed: false,
  },
  {
    id: 4,
    word: "ASTRONAUT",
    hasGuessed: false,
  },
  {
    id: 5,
    word: "CHOCOLATE",
    hasGuessed: false,
  },
  {
    id: 6,
    word: "ELEPHANT",
    hasGuessed: false,
  },
  {
    id: 7,
    word: "JAVASCRIPT",
    hasGuessed: false,
  },
  {
    id: 8,
    word: "BUTTERFLY",
    hasGuessed: false,
  },
  {
    id: 9,
    word: "BLUEBERRY",
    hasGuessed: false,
  },
  {
    id: 10,
    word: "PENGUIN",
    hasGuessed: false,
  },
  {
    id: 11,
    word: "TELEPHONE",
    hasGuessed: false,
  },
  {
    id: 12,
    word: "MOUNTAIN",
    hasGuessed: false,
  },
  {
    id: 13,
    word: "BOOKSTORE",
    hasGuessed: false,
  },
  {
    id: 14,
    word: "PYRAMID",
    hasGuessed: false,
  },
  {
    id: 15,
    word: "UNICORN",
    hasGuessed: false,
  },
  {
    id: 16,
    word: "KANGAROO",
    hasGuessed: false,
  },
  {
    id: 17,
    word: "PLATYPUS",
    hasGuessed: false,
  },
  {
    id: 18,
    word: "GRAPEFRUIT",
    hasGuessed: false,
  },
  {
    id: 19,
    word: "ORCHESTRA",
    hasGuessed: false,
  },
  {
    id: 20,
    word: "HELICOPTER",
    hasGuessed: false,
  },
  {
    id: 21,
    word: "SHIP",
    hasGuessed: false,
  },
  {
    id: 22,
    word: "MUSEUM",
    hasGuessed: false,
  },
  {
    id: 23,
    word: "REFRIGERATOR",
    hasGuessed: false,
  },
  {
    id: 24,
    word: "COMPREHENSION",
    hasGuessed: false,
  },
  {
    id: 25,
    word: "NOTEBOOK",
    hasGuessed: false,
  },
  {
    id: 26,
    word: "FURNITURE",
    hasGuessed: false,
  },
  {
    id: 27,
    word: "OCEAN",
    hasGuessed: false,
  },
  {
    id: 28,
    word: "SUBMARINE",
    hasGuessed: false,
  },
  {
    id: 29,
    word: "KNOWLEDGE",
    hasGuessed: false,
  },
  {
    id: 30,
    word: "TELESCOPE",
    hasGuessed: false,
  },
  {
    id: 31,
    word: "ANTHROPOLOGY",
    hasGuessed: false,
  },
  {
    id: 32,
    word: "DINOSAUR",
    hasGuessed: false,
  },
  {
    id: 33,
    word: "EUCALYPTUS",
    hasGuessed: false,
  },
  {
    id: 34,
    word: "MECHANICAL",
    hasGuessed: false,
  },
  {
    id: 35,
    word: "RACCOON",
    hasGuessed: false,
  },
  {
    id: 36,
    word: "SATELLITE",
    hasGuessed: false,
  },
  {
    id: 37,
    word: "THERMOMETER",
    hasGuessed: false,
  },
  {
    id: 38,
    word: "WATERFALL",
    hasGuessed: false,
  },
  {
    id: 39,
    word: "BLACKBERRY",
    hasGuessed: false,
  },
  {
    id: 40,
    word: "XENOPHOBIA",
    hasGuessed: false,
  },
];

export const initialAlphabets: Alphabet[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  .split("")
  .map((letter) => ({ letter, isGuessed: false }));
