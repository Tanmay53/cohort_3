upper=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
lower=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
string="ZbaY"
ans=""
for x in string:
    if(x) in upper:
        index=upper.index(x)
        ans=ans+str(upper[25-index])
    else:
        index=lower.index(x)
        ans=ans+str(lower[25-index])
print(ans)