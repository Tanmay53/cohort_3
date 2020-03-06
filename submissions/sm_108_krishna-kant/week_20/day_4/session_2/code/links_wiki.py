import requests
from bs4 import BeautifulSoup

response = requests.get("https://en.wikipedia.org/wiki/Python_(programming_language)")
soup = BeautifulSoup(response.text,'html.parser')
links = soup.find_all('a')

for i in links:
    print(i)
    print("____________________________")
