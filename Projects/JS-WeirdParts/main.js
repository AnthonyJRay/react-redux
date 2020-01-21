// function generateChar() {
//   var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//   return chars.charAt(Math.floor(Math.random() * chars.length))
// }

// console.log(generateChar())
// const p = document.querySelector("div.parent");
// console.log(p)
// const p = document.querySelector("div");
// console.log(p)
const words = [
  'hello', 'hi', 'far', 'star', 'car', 'part', 'lock', 'clock', 'flock', 'shock', 'knock', 'blonde', 'bleak', 'streak',
  'cook', 'look', 'green', 'red', 'clean', 'yellow', 'blue', 'black', 'white', 'blend', 'cleanse', 'meat', 'seat',
  'hook', 'fork', 'spoon', 'knife', 'knives', 'crater', 'cater', 'eat', 'ate', 'ram', 'run', 'ran', 'write', 'write', 'quiet',
  'quite', 'quilt', 'silt', 'build', 'built', 'drill', 'saw', 'remember', 'hopeful', 'joyful', 'jolly', 'spirit', 'intense',
  'tense', 'blend', 'cart', 'tart', 'redemer', 'raindeer', 'antlers', 'desk', 'computer', 'laptop', 'processor', 'graphic',
  'movie', 'sling', 'cling', 'drink', 'brink', 'think', 'thought', 'cold', 'flow', 'trough', 'drought', 'slow', 'crow',
  'loud', 'sought', 'bought', 'ground', 'pound', 'lean', 'screen', 'friend', 'credible', 'loyal', 'loyalty', 'honest',
  'honesty', 'recommend', 'line', 'brine', 'crime', 'slime', 'lime', 'grime', 'prime', 'sling', 'fling', 'kink', 'sink',
  'link', 'drink', 'crop', 'drop', 'mop', 'kong', 'long', 'effigy', 'condescending', 'condolence', 'crimson', 'rememberance',
  'philantropy', 'entrepeneur', 'clearing', 'smearing', 'adolescence', 'paradigm', 'vanguard', 'cruelty', 'paradox', 'delusion',
  'forgotten', 'judgement', 'honor', 'cordial', 'complexity', 'comprehension', 'mentality', 'manufacturing', 'production',
  'warehouse', 'storage', 'forage', 'foliage', 'unearthing', 'carbon', 'intelligence', 'effective', 'affirmative', 'memorandum'
]

getWords = (newWords) => {
  let p = document.querySelector("div")
  newArr = []
  for (let i = 0; i < words.length; i++) {
    const randomWords = words[Math.floor(Math.random() * words.length)]
    newArr.push(randomWords)
    let s = document.createElement("span")
    s.className = "z"
    s.append(randomWords)
    p.append(s)
  }
  console.log(newArr);
}

getWords()