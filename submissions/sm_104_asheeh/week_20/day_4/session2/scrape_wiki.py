import requests
from bs4 import BeautifulSoup

url = "https://en.wikipedia.org/"
response = requests.get(url)


soup = BeautifulSoup(response.text, 'html.parser')
for ele in soup:
    print(soup)
    print("**********************")