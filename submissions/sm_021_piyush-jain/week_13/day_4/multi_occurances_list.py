list1=["a","b","b","c","c","c","d","d","d","d"]
alpha={}
for x in list1:
    if x in alpha:
        alpha[x]= alpha[x]+1
    else:
        alpha[x]=1  
        
for x in alpha:
    if (alpha[x]) > 1:
        print(x)
    
