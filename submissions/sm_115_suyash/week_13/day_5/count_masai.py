f1 = open("random_ids.txt")
cnt = 0
for _list in f1:
    cnt += _list.count("masai")
f1.close()
print(cnt)