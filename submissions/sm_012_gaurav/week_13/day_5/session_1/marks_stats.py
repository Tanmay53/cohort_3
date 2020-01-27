f = open('marks_rand_2000.csv','r')
marks_india = open('marks_india.txt', 'a')
marks_pakistan = open('marks_pakistan.txt', 'a')
marks_100 = open('marks_100.txt', 'a')
marksList = f.read().strip().split('\n')
cntInd = 0
cntPak = 0
cntLT50 = 0
cntMT50 = 0
cntE50 = {"India":0, "Pakistan":0}
for i in range(len(marksList)):
    marksList[i] = marksList[i].split()
    marksList[i][0] = int(marksList[i][0])
    if "India" in marksList[i]:
        cntInd += 1
        marks_india.write(str(marksList[i][0]) + ' ' + marksList[i][2] + '\n')
    elif "Pakistan" in marksList[i]:
        cntPak += 1
        marks_pakistan.write(str(marksList[i][0]) + ' ' + marksList[i][2] + '\n')
    
    if marksList[i][0] < 50:
        cntLT50 += 1
    elif marksList[i][0] > 50:
        cntMT50 += 1
    elif marksList[i][0] == 50:
        cntE50[marksList[i][1]] += 1

    if marksList[i][0] == 100:
        marks_100.write(marksList[i][2] + '\n')

marks_100.close()
marks_india.close()
marks_pakistan.close()
f.close()

print("No of students of India", cntInd)
print("No of students of pakistan", cntPak)
print("No of students with marks less than 50", cntLT50)
print("No of students with marks more than 50", cntMT50)
print("No of students with marks equal to 50: ")
print("India: ", cntE50["India"])
print("Pakistan: ", cntE50["Pakistan"])
