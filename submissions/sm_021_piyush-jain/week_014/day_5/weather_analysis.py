import csv
def weather():
    with open("/home/piyush/coding/week_014/day_5/KCQT.csv","r+b") as csvfile:
        fieldnames = ["date","actual_mean_temp","actual_min_temp","actual_max_temp","average_min_temp","average_max_temp","record_min_temp","record_max_temp","record_min_temp_year","record_max_temp_year","actual_precipitation","average_precipitation","record_precipitation"]
        writer = csv.DictWriter(csvfile, delimiter=" ", fieldnames=fieldnames)
        reader = csv.DictReader(csvfile)
        writer.writeheader()
        years={}
        for row in reader:
            global min_temp
            min_temp="Min_temp"
            global max_temp
            max_temp="Max_temp"
            date=row["date"].split("-")
            year=int(date[0])
            month=int(date[1])
            min=int(row["actual_min_temp"])
            max=int(row["actual_max_temp"])
            if year not in years:
                years[year]={}
            else:
                if month not in years[year]:
                    years[year][month]={
                        min_temp:min,
                        max_temp:max
                    }
                else:
                        if (years[year][month][min_temp]> min):
                            years[year][month][min_temp]=min
                        if (years[year][month][max_temp]<max):
                            years[year][month][max_temp]=max

    print(years)
    with open("/home/piyush/coding/week_014/day_5/summary.csv","w") as csvfile:
        fieldnames=["year","month","Min_temp","Max_temp"]
        writer = csv.DictWriter(csvfile, delimiter=" ", fieldnames=fieldnames)
        writer.writeheader()
        # for i in years:
        #     writer.writerow({"year":years[year],"month":years[year][month],"Min_temp":years[year][min_temp],"Max_temp":years[year][month][max_temp]})

            
weather()             