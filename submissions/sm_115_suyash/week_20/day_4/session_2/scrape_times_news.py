import requests
from bs4 import BeautifulSoup
from scrape_news import *

data = requests.get("https://timesofindia.indiatimes.com/news")

soup = BeautifulSoup(data.content, "html.parser")
print("------------------------------------------------------------")
title = soup.find_all("span", {"class":"w_tle"})

for i in title:
    print(type(i.getText()))