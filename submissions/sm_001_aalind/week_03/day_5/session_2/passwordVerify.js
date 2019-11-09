function passwordVerify(obj, pssd) {
  var upssd = obj["password"];
  if(upssd.length != pssd.length) {
    return false;
  } else {
    for(i = 0; i < upssd.length; i++) {
      if(upssd[i] !== pssd[i]) {
        return false;
      }
    }
  }

  return true;
}