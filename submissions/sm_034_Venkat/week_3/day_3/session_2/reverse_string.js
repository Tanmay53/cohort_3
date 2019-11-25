function reverse(a) {
  var a = a || 'I am Venkat'
  for (i = a.length - 1; i >= 0; i--) {
    console.log(a[i])
  }
}
reverse('Tsunami')