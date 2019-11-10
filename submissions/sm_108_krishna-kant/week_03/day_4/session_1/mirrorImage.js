var string = "AzazazazBa";
var alpha = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
var stringArr = string.split("");
var temp = string.split("");
var indexs = [];

function arrayMirror(args) {
  args.forEach(value => {
    indexs.push(alpha.indexOf(value.toLowerCase()));
  });

  for (i = 0; i < stringArr.length; i++) {
    stringArr[i] = alpha[alpha.length - indexs[i] - 1];
  }
  for (i = 0; i < stringArr.length; i++) {
    if (!alpha.includes(temp[i])) {
      stringArr[i] = stringArr[i].toUpperCase();
    }
  }
  string = "";
  stringArr.forEach(value => {
    string += value;
  });
  return string;
}

console.log(arrayMirror(stringArr));
