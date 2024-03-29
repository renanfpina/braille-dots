type BrailleMap = {
  [key: string]: string
}

const brailleMap: BrailleMap = {
  // a-z letters
  'a': '1',
  'b': '1, 2',
  'c': '1, 4',
  'd': '1, 4, 5',
  'e': '1, 5',
  'f': '1, 2, 4',
  'g': '1, 2, 4, 5',
  'h': '1, 2, 5',
  'i': '2, 4',
  'j': '2, 4, 5',
  'k': '1, 3',
  'l': '1, 2, 3',
  'm': '1, 3, 4',
  'n': '1, 3, 4, 5',
  'o': '1, 3, 5',
  'p': '1, 2, 3, 4',
  'q': '1, 2, 3, 4, 5',
  'r': '1, 2, 3, 5',
  's': '2, 3, 4',
  't': '2, 3, 4, 5',
  'u': '1, 3, 6',
  'v': '1, 2, 3, 6',
  'w': '2, 4, 5, 6',
  'x': '1, 3, 4, 6',
  'y': '1, 3, 4, 5, 6',
  'z': '1, 3, 5, 6',
  // numbers
  '1': '3, 4, 5, 6 + 1',
  '2': '3, 4, 5, 6 + 1, 2',
  '3': '3, 4, 5, 6 + 1, 4',
  '4': '3, 4, 5, 6 + 1, 4, 5',
  '5': '3, 4, 5, 6 + 1, 5',
  '6': '3, 4, 5, 6 + 1, 2, 4',
  '7': '3, 4, 5, 6 + 1, 2, 4, 5',
  '8': '3, 4, 5, 6 + 1, 2, 5',
  '9': '3, 4, 5, 6 + 2, 4',
  '0': '3, 4, 5, 6 + 2, 4, 5',
  // acentuation
  'ç': '1, 2, 3, 4, 6',
  'á': '1, 2, 3, 5, 6',
  'é': '1, 2, 3, 4, 5, 6',
  'í': '3, 4',
  'ó': '1, 3, 4',
  'ú': '2, 3, 4, 5, 6',
  'â': '1, 6',
  'ê': '1, 2, 6',
  'ô': '1, 4, 5, 6',
  'ã': '3, 4, 5',
  'õ': '2, 4, 6',
  'à': '1, 2, 4, 6',
  'ü': '1, 2, 5, 6',
  // special characters
  'º ': '3, 4, 5, 6',
  ',': '2',
  ';': '2, 3',
  ':': '2, 5',
  '.': '3',
  '?': '2, 6',
  '!': '2, 3, 5',
  // '“': '2, 3, 6',
  // '...': '3 + 3 + 3',
  '-': '3,6',
  '_': '3, 6 + 3, 6',
  '/': '3, 4',
  '$': '5, 6',
  '@': '1, 5, 6',
  '+': '2, 3, 5',
  'x*': '2, 3, 6',
  '/*': '2, 5, 6',
  '=': '2, 3, 5,6',
  '%': '4, 5, 6 + 3, 5, 6',
  '>': '1, 3, 5',
  '<': '2, 4, 6 ( 1, 2, 6',
  '(': '1, 2, 6',
  ')': '3, 4, 5',
  '[': '1, 2, 3, 5, 6',
  ']': '2, 3, 4, 5, 6',
  '{': '5 + 1, 2, 3',
  '}': '4, 5, 6 + 2',
  '°': '3, 5, 6',
  'upperCase': '4, 6'
}

export default brailleMap
