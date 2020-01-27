f = open('random_ids.txt','r')
textList = f.read().split('\n')
cnt = 0
for a in textList:
    if 'masai' in a:
        cnt += 1
print(cnt)
f.close()