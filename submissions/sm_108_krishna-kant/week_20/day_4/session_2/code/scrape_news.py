import requests
from bs4 import BeautifulSoup

timesofindia = requests.get("https://timesofindia.indiatimes.com/briefs")
ndtv = requests.get("https://www.ndtv.com/latest")


soup = BeautifulSoup(timesofindia.text,'html.parser')

soup2 = BeautifulSoup(ndtv.text,'html.parser')

headings = soup2.find_all("div",{"class","nstory_header"}) 

brief = soup.find_all('h2')


toi_headlines = []
ndtv_headlines = []

for i in range(30):
    toi_headlines.append(brief[i].a.text)

for i in headings:
    ndtv_headlines.append(i.a["title"])

# print(toi_headlines)
# print(ndtv_headlines)

f = open("/home/coder-hex/Desktop/OpenSource/cohort_3/submissions/sm_108_krishna-kant/week_20/day_4/session_2/code/news.txt", "a")
print(f)
for i in toi_headlines:
    f.writelines(i+"\n")
for i in ndtv_headlines:
    f.writelines(i+"\n")
f.close()