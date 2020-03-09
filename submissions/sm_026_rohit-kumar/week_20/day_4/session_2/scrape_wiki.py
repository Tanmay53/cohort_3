import requests
from bs4 import BeautifulSoup

url = 'https://en.wikipedia.org/wiki/Python_(programming_language)'
result = requests.get(url)

soup = BeautifulSoup(result.text, 'html.parser')

print('row file content after request : ')
print('Page Title : ', soup.title.text)
print('Body Text : ', soup.body.text)