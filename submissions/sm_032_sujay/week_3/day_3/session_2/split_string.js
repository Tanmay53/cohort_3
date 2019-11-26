var game='foosball'
var c='o'

var arr = []

function splitMadi (string,char){
    for(i=0;i<string.length;i++)
    {
        if(string[i]!=c)
        {
            arr.push(string[i])
        }
    }
    console.log(arr)
}splitMadi(game,c)

