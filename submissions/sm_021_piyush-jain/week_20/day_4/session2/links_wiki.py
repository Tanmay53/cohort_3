import requests
from bs4 import BeautifulSoup

url='https://timesofindia.indiatimes.com/'
r=requests.get(url)

soup=BeautifulSoup(r.text,'html.parser')
links=(soup.find_all('a'))

for i in links:
    print(i.get('href'))
    print('----------')