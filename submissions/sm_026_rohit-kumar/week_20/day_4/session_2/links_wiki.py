import requests
from bs4 import BeautifulSoup

url = 'https://en.wikipedia.org/wiki/Python_(programming_language)'
result = requests.get(url)

soup = BeautifulSoup(result.text, 'html.parser')
links = soup.find_all('a')
for link in links:
    print(link)

print('\nTotal links found : ', len(links))