/**
 * function to find mirror of string
 * @param {string} str
 */
const mirrorImage = str => {
  if (str.length != 0 && typeof str != "number") {
    let mirror = "";
    for (var i = 0; i < str.length; i++) {
      let n = str.charCodeAt(i);
      if (65 <= n && 90 >= n) {
        let val = 90 - (n - 65);
        mirror += String.fromCharCode(val);
      } else if (97 <= n && 122 >= n) {
        let val = 122 - (n - 97);
        mirror += String.fromCharCode(val);
      }
    }
    return mirror;
  } else {
    return "Wrong Input!";
  }
};

module.exports = { mirrorImage };
