import requests
from bs4 import BeautifulSoup

data = requests.get("https://timesofindia.indiatimes.com/news")

soup = BeautifulSoup(data.content, "html.parser")
print("------------------------------------------------------------")
title = soup.find_all("span", {"class":"w_tle"})
i = 0
for head in title:
    print(head.text)
    print("------------------------------------------------------------",i)
    i = i + 1