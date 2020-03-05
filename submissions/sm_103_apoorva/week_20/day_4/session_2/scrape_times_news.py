import requests
from bs4 import BeautifulSoup

r = requests.get('https://timesofindia.indiatimes.com/briefs')
data = r.text

soup = BeautifulSoup(data, 'html.parser')

for brief in soup.find_all("div",{"class":'brief_box'}):
    print("---------------")
    print(brief.getText())
    print("---------------")