import requests
from bs4 import BeautifulSoup

url = 'https://timesofindia.indiatimes.com/briefs'
result = requests.get(url)

soup = BeautifulSoup(result.text, 'html.parser')

print('row file content after request : ')
print('Page Title : ', soup.title.text)
print('Body Text : ', soup.body.text)