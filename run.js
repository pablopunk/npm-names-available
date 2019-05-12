const npmName = require('npm-name')

async function check (name) {
  const available = await npmName(name).catch(() => {})
  if (available) {
    console.log(name)
  }
}

const letters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
]

for (let first of letters) {
  for (let second of letters) {
    for (let third of letters) {
      check(first + second + third)
    }
  }
}
