function arrayDifference(args1 = [], args2 = []) {
  if (typeof args2 != 'object' || typeof args1 != 'object') {
    return false;
  }
  let difference = {};
  for (i = 0; i < args2.length; i++) {
    if (!args1.includes(args2[i])) {
      difference[args2[i]] = args2[i];
    }
  }
  return Object.values(difference);
}

module.exports = { arrayDifference };
