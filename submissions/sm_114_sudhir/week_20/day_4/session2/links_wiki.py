import requests 
from bs4 import BeautifulSoup

url = "https://en.wikipedia.org/wiki/Python_(programming_language)"
response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')

links = soup.find_all('a')

# testing --
# briefs = soup.find_all('div', {'class': 'brief_box'})
# print(briefs)


for i in links:
    print(i)
    print('-------------')


