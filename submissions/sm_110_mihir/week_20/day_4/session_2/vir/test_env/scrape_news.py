import requests
from bs4 import BeautifulSoup

file = open('news.txt','a')
url = "https://timesofindia.indiatimes.com/briefs"
r = requests.get(url)
soup = BeautifulSoup(r.text,"html.parser")
brief = soup.find_all('div',{'class':'brief_box'})

print("Times of Indea top 30 headlines:-")
file.write("Times of Indea top 30 headlines:-")
file.write("\n")

for i in range(30):
    print(brief[i].text)
    print("---------------")
    file.write(brief[i].text)
    file.write("\n")
    file.write("-------------------------------------------------")
    file.write("\n")

#scpae NDTV headlines

url = "https://www.ndtv.com/topic/briefs"
r = requests.get(url)
soup = BeautifulSoup(r.text,"html.parser")
brief = soup.find_all('p',{'class':'intro'})

print("NDTV top 30 headlines:-")
file.write("\n")
file.write("NDTV top 30 headlines:-")
file.write("\n")
for i in range(30):
    print(brief[i].text)
    print("---------------")
    file.write(brief[i].text)
    file.write("\n")
    file.write("-------------------------------------------------")
    file.write("\n")
file.close()