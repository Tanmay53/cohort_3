f1 = open("/home/apoorva/coding/week_13_python_starts/day_5/emails_rand.txt","r")
s = {""}
li = []
dictionary = {}
for line in f1:
    li.append(line.split())
f1.close()

for i in li:
    s.add(i[0])

for i in li:
    if i[0] in dictionary:
        dictionary[i[0]] += 1
    else:
        dictionary[i[0]] = 1

def show_duplicate(path,dictionary):
    f1 = open(path,"w")
    for key in dictionary:
        if dictionary[key] > 1:
            f1.writelines(key+"  :"+str(dictionary[key]) + "\n")
    f1.close()

# print(s)
print(len(s)-1)
show_duplicate("/home/apoorva/coding/week_13_python_starts/day_5/duplicate_emails.txt",dictionary)