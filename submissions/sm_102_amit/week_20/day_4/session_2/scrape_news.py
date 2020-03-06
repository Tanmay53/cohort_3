import sys
import requests
from bs4 import BeautifulSoup

res = requests.get("https://timesofindia.indiatimes.com/briefs")
times = BeautifulSoup(res.text, "html.parser")
t = 1
f = open("news.txt", "a")
f.write("\nTIMES NEWS\n")
for i in times.find_all("div", {"class":"brief_box"}):
    x = str(t) + ": " + i.text + "\n"
    f.write(x)
    t += 1
f.close()

res2 = requests.get("https://www.ndtv.com/latest?pfrom=home-mainnavgation")
ndtv = BeautifulSoup(res2.text, "html.parser")
n = 1
f = open("news.txt", "a")
f.write("\nNDTV NEWS\n")
for i in ndtv.find_all("div", {"class":"nstory_header"}):
    y = str(n) + ": " + i.text + "\n"
    f.write(y)
    n += 1
f.close()