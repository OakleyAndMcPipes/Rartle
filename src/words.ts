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
  'rarts',
  'packs',
  'piggy',
  'foden',
  'cruft',
  'matty',
  '84npd',
  'scran',
  'botty',
  'bunda',
  'roses',
  'seesh',
  'nutes',
  'chunky',
  'fryup',
  'goats',
  'voice',
  'honks',
  'tinny',
  'missy',
  'snozy',
  'flare',
  'penos',
  'balls',
  'andre',
  'goaty',
  'david',
  'pints',
  'mario',
  'pissy',
  'clart',
  'thicc',
  'train',
  'clown',
  'rarta',
  'swole',
  'hoggg',
  'bongo',
  'pinky',
  'reeee',
  'wario',
  'karts',
  'stink',
  'tramp',
  'ponds',
  'shots'
]
