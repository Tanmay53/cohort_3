import requests
from bs4 import BeautifulSoup

url='https://en.wikipedia.org/wiki/Python_(programming_language)'
r=requests.get(url)

soup=BeautifulSoup(r.text,'html.parser')
print(soup.find_all('title'))