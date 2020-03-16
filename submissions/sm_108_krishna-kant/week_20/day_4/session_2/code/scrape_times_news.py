import requests
from bs4 import BeautifulSoup

response = requests.get("https://timesofindia.indiatimes.com/briefs")

soup = BeautifulSoup(response.text,'html.parser')
brief = soup.find_all('div',{"class":"brief_box"})

for i in brief:
    print(i.text)
    print("____________________________")
