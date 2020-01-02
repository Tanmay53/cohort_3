function mirrorString(string) {
  let type = typeof string;
  if (type != 'string') {
    return type;
  }
  string = string.trim().split('');
  let mirror = [
    'z',
    'y',
    'x',
    'w',
    'v',
    'u',
    't',
    's',
    'r',
    'q',
    'p',
    'o',
    'n',
    'm',
    'l',
    'k',
    'j',
    'i',
    'h',
    'g',
    'f',
    'e',
    'd',
    'c',
    'b',
    'a'
  ];

  let original = [
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
  ];
  let number_flag = false;

  if (string.length < 1) {
    return null;
  }

  string.forEach((val, i, arr) => {
    let charCode = val.charCodeAt(0);
    if (charCode >= 65 && charCode <= 90) {
      let index = original.indexOf(val.toLowerCase());
      arr[i] = mirror[index].toUpperCase();
    } else if (charCode >= 97 && charCode <= 122) {
      let index = original.indexOf(val);
      arr[i] = mirror[index].toLowerCase();
    } else {
      number_flag = true;
    }
  });
  if (number_flag) {
    return false;
  } else {
    return string.join('');
  }
}

module.exports = { mirrorString };
