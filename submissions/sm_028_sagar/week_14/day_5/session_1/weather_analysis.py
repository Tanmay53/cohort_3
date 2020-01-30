import csv
def write_csv(data):

    with open('summery.csv','a') as csvfile:
        fieldnames = ['year','month','min_temp','max_temp'] 
        writer = csv.writer(csvfile, delimiter = ' ', quotechar = '|')
        writer.writerow(['year','month','min_temp','max_temp'])
        #writing values for fieldnames
        for i in range(len(data)):
            writer.writerow([data[i][0],data[i][1],data[i][2],data[i][3]])


def read_csv():
        with open('KCQT.csv') as csvfile:
            reader = csv.reader(csvfile,delimiter=',',quotechar = '"') 
            count = 0
            data_list = []
            for row in reader:
                count += 1
                if(count == 1):
                    continue
                arr = (list(map(int,row[0].split('-'))))
                if(count == 2):
                    prev_year = arr[0]
                    prev_month = arr[1]
                    min_temp = int(row[2])
                    max_temp = int(row[3])
                    continue
                current_year = arr[0]
                current_month = arr[1]
                
                if current_year == prev_year and current_month == prev_month:
                    if int(row[2]) < min_temp : min_temp = int(row[2]) 
                    if int(row[3]) > max_temp : max_temp = int(row[3])
                    # print(current_month,min_temp,max_temp)
                else:
                    year = prev_year
                    month = prev_month
                    current_data = [year,month,min_temp,max_temp]
                    data_list.append(current_data)
                    prev_year = current_year
                    prev_month = current_month
                    min_temp = int(row[2])
                    max_temp = int(row[3])
            write_csv(data_list)

#invoking function
read_csv()