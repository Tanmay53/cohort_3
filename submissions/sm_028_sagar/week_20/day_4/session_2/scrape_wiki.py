import requests
from bs4 import BeautifulSoup

url = 'https://en.wikipedia.org/wiki/Python_(programming_language)'

r = requests.get(url)
soup = BeautifulSoup(r.text, 'html.parser')
title = soup.find('title').text
print(title) #title of wiki page
print(soup.find_all('a')) #all anchor tags
content = soup.find('div',{'class','mw-parser-output'})
print(content)
