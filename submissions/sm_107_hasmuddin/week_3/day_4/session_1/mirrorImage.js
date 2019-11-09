function mirrorImage(string) {
  arr = string.split("");
  sLetter = [];

  for (i = 0; i < arr.length; i++) {
    sLetter.push(arr[i].toLowerCase());
  }

  fHalf = sLetter.slice(0, Number(string.length) / 2);
  sHalf = sLetter.slice(Number(string.length) / 2, Number(string.length));
  fString = "";
  sString = "";
  for (j = 0; j < fHalf.length; j++) {
    fString += fHalf[j];
  }

  for (k = 0; k < sHalf.length; k++) {
    sString += sHalf[k];
  }
  mirrorString = sString + fString;
  console.log(mirrorString);
}
mirrorImage("AbCd");
