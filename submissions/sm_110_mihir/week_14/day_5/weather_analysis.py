import csv

def read_csv(filename,delimiter):
    with open(filename) as csvfile:
        reader = csv.reader(csvfile, delimiter=delimiter, quotechar='"')
        result=[]
        for row in reader:
            newDate=[]
            if row[0]!="date":
                newDate=row[0].split('-')
                # print (newDate[1:2])
                min_temp=row[2]
                max_temp=row[3]
                date=newDate[0:2]
                result.append([*date,min_temp,max_temp])
        return result

def write_csv(data):
    with open("summary.csv","w") as csvfile:
        writer = csv.writer(csvfile, delimiter=' ', quotechar='|', quoting=csv.QUOTE_MINIMAL)
        writer.writerow(['year', 'month','actual_min_temp','actual_max_temp'])
        for row in data:
            writer.writerow(row)


def summarize():
    result=read_csv("KCQT.csv",",")
    # print(result)
    # using dictionary find min and max temp for each distinct month of years
    data={}
    for line in result:
        key=line[0]+"-"+line[1]
        if data.get(key):
            if line[2]<data[key]["min_temp"]:
                data[key]["min_temp"]=line[2]
            if line[3]>data[key]["max_temp"]:
                data[key]["max_temp"]=line[3]
        else:
            data[key]={}
            data[key]["min_temp"]=line[2]
            data[key]["max_temp"]=line[3]
    li=[]
    for k in data:
        newDate=k.split("-")
        year=newDate[0]
        month=newDate[1]
        li.append(year+","+month+","+data[k]["min_temp"]+","+data[k]["max_temp"])
    print(li)
    write_csv(li)

summarize()