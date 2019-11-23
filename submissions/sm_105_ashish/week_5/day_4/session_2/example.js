input=['5', 'rancho 45','chatur 32','raju 30','farhan 28','virus 32','joy 45' ]
var N=Number(input[0])
input.shift()
input=input.map(function(ele){
    return ele.split(' ')
})
var temp=[]
for(var i=0;i<N;i++)
    {
        for(var j=i+1;j<=N;j++)
            {
                if(Number(input[i][1])<Number(input[j][1]))
                    {
                        temp=input[i]
                        input[i]=input[j]
                        input[j]=temp
                    }
            }
    }
console.log(input)
