import requests
from bs4 import BeautifulSoup


url = "https://www.wikipedia.org/"
r = requests.get(url)
soup = BeautifulSoup(r.text, 'html.parser')

print(soup)