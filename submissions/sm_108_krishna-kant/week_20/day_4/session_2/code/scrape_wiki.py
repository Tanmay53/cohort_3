import requests
from bs4 import BeautifulSoup

response = requests.get("https://en.wikipedia.org/wiki/Python_(programming_language)")
soup = BeautifulSoup(response.text,'html.parser')
divisions = soup.find_all('div',{"id":"bodyContent"})

for i in divisions:
    print(i.text)
    print("____________________________")
