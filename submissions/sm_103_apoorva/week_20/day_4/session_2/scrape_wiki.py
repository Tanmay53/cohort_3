import requests
from bs4 import BeautifulSoup

r = requests.get('https://en.wikipedia.org/wiki/Python_(programming_language)')
data = r.text

soup = BeautifulSoup(data, 'html.parser')

print(soup.title)