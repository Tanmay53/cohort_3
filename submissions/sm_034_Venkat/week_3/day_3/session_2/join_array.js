function show(chr, arr) {
    var chr = chr || 'a';
    var arr = arr || ['Fruit', 'Vegetable', 'Stick'];
    var joint= "";
    var string= ""
    for (i=0; i<arr.length; i++){
      string=  chr.concat(""+arr[i]);
        joint+=string;
    }
    console.log(joint)
    console.log(typeof (joint))
}
show()