import requests
from bs4 import BeautifulSoup

r = requests.get('https://en.wikipedia.org/wiki/Python_(programming_language)')
data = r.text

soup = BeautifulSoup(data, 'html.parser')

for link in soup.find_all('a'):
    print(link.get('href'))