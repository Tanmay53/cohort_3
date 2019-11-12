function mirrorImage(word) {
    var cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var small = "abcdefghijklmnopqrstuvwxyz";
    var new_word = ""
    for(var i=0;i<word.length;i++)
    {
    var index=cap.indexOf(word[i])
    if(index>=0)
    {
        new_word=new_word+cap[25-index]
    }
    else{
        var index=small.indexOf(word[i])
            new_word=new_word+small[25-index]
        }
    }
    console.log("pppp : [",new_word,"]")
}
mirrorImage("AbCd")