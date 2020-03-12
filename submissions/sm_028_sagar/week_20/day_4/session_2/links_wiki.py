import requests
from bs4 import BeautifulSoup

url = 'https://en.wikipedia.org/wiki/Python_(programming_language)'

r = requests.get(url)
soup = BeautifulSoup(r.text, 'html.parser')
a_tags = soup.find_all('a') #all anchor tags
for a in a_tags:
    print(a.get('href'))
