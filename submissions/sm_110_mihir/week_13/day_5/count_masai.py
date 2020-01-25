f1=open("random_ids.txt","r")
count=0
for line in f1:
    if "masai" in line:
        count+=1
f1.close()
print("Masai is present "+str(count)+" times")