function countConsonants(s) {
  var count = 0;
  for (var i = 0; i < s.length; i++) {
    switch (s[i]) {
      case 'b':
      case 'B':
      case 'c':
      case 'C':
      case 'd':
      case 'D':
      case 'f':
      case 'F':
      case 'g':
      case 'G':
      case 'h':
      case 'H':
      case 'j':
      case 'J':
      case 'k':
      case 'K':
      case 'l':
      case 'L':
      case 'm':
      case 'M':
      case 'n':
      case 'N':
      case 'p':
      case 'P':
      case 'q':
      case 'Q':
      case 'r':
      case 'R':
      case 's':
      case 'S':
      case 't':
      case 'T':
      case 'v':
      case 'V':
      case 'w':
      case 'W':
      case 'x':
      case 'X':
      case 'y':
      case 'Y':
      case 'z':
      case 'Z':
        count++;
      default:
        continue;
    }
  }
  return count;
}

console.log(countConsonants('siddharth'));

// Input tried - 'AEIOU'  'aeiou'  '@@##$$'  'SHIVANSH'  'Siddharth'
