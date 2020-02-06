
import csv
import os.path


def create_data(continent_id, country_id, continent, country, city):
    list_continent = []

    fileExist = os.path.isfile("data/continent.csv")
    with open("data/continent.csv", "a") as csvfile:
        fieldnames = ["continent_id", "continent"]
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        if not fileExist:
            writer.writeheader()
        with open("data/continent.csv") as csvfile:
            reader = csv.DictReader(csvfile)
            for r in reader:  # avoid duplicates
                list_continent.append(r["continent"])
            if continent not in list_continent:
                writer.writerow(
                    {"continent_id": continent_id, "continent": continent})

    list_country = []
    fileExist = os.path.isfile("data/country.csv")
    with open("data/country.csv", "a") as csvfile:
        fieldnames = ["country_id", "continent_id", "country"]
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        if not fileExist:
            writer.writeheader()
        with open("data/country.csv") as csvfile:
            reader = csv.DictReader(csvfile)
            for r in reader:                         # avoid duplicates
                list_country.append(r["country"])
            if country not in list_country:
                writer.writerow({"continent_id": continent_id,
                                 "country_id": country_id, "country": country})
    list_cities = []
    fileExist = os.path.isfile("data/cities.csv")
    with open("data/cities.csv", "a") as csvfile:
        fieldnames = ["country_id", "city"]
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        if not fileExist:
            writer.writeheader()
        with open("data/cities.csv") as csvfile:
            reader = csv.DictReader(csvfile)
            for r in reader:                         # avoid duplicates
                list_cities.append(r["city"])
            if city not in list_cities:
                writer.writerow({"country_id": country_id, "city": city})


print("enter continent_id")
continent_id = input()
print("enter country_id")
country_id = input()
print("enter continent name")
continent = input()
print("enter country name")
country = input()
print("enter city name")
city = input()
create_data(continent_id, country_id, continent, country, city)
