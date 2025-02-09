export function getWordOfTheDay() {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const firstDate = new Date(2022, 1, 22).setHours(0,0,0,0);
  const secondDate = new Date().setHours(0,0,0,0);
  let diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
  while (diffDays > allWords.length) {
    diffDays -= allWords.length
  }
  return allWords[diffDays]
}

export const allWords = [
  'lllll',
  'salvo', 
  'plube',
  'baldy',
  'karts',
  'reeee',
  'bildr',
  'piggy',
  'snozy',
  'train',
  'rarta',
  'wiser',
  'rarts',
  'balls',
  'packs',
  'dodes',
  'goats',
  '0121u',
  'penos',
  'nutes',
  'shots',
  'mario',
  'nonce',
  'grond',
  'feliz',
  'wario',
  'roses',
  'fryup',
  'peeep',
  'stink',
  'kante',
  'andre',
  'pinky',
  'thicc',
  'matty',
  'bunda',
  'flare',
  'clart',
  'giles',
  'voice',
  'david',
  'goaty',
  'batty',
  'mlord',
  'honks',
  '1bang',
  'ponds',
  'pints',
  'cruft',
  'wayne',
  'missy',
  'mlord',
  'seshy',
  'tinny',
  'ganbu',
  'bongo',
  'scran',
  '84npd',
  'hoggg',
  'foden',
  'swole',
  'clown',
  'seesh',
  'slurp',
  'clash',
  'tramp',
  'botty',
  'pissy',
  'peeep'
]
