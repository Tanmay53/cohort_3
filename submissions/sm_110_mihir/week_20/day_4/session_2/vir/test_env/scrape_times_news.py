import requests
from bs4 import BeautifulSoup

url = "https://timesofindia.indiatimes.com/briefs"
r = requests.get(url)
soup = BeautifulSoup(r.text,"html.parser")
brief = soup.find_all('div',{'class':'brief_box'})
for i in brief:
    print(i.text)
    print("---------------")