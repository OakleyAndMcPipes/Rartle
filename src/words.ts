export function getWordOfTheDay() {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const firstDate = new Date(2022, 1, 1).setHours(0,0,0,0);
  const secondDate = new Date().setHours(0,0,0,0);
  let diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
  while (diffDays > allWords.length) {
    diffDays -= allWords.length
  }
  return allWords[diffDays]
}

export const allWords = [
  'snozy',
  'rarts',
  'packs',
  'baldy',
  'foden',
  'cruft',
  'matty',
  'scran',
  'botty',
  'bunda',
  'roses',
  'plube',
  'nutes',
  'chunky',
  'fryup',
  'goats',
  'voice',
  'tinny',
  'missy',
  'flare',
  'blosh',
  'penos',
  'balls',
  'andre',
  'goaty',
  'david',
  'pints',
  'piggy',
  'mario',
  'clart',
  'thicc',
  'train',
  'clown',
  'rarta',
  'seesh',
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
  'pissy',
  'salvo',
  'shots'
]
