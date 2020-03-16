import requests
from bs4 import BeautifulSoup
url = "https://en.wikipedia.org/wiki/Python"
r = requests.get(url)
soup = BeautifulSoup(r.text, "html.parser")
for a in soup.find_all('a', href=True):
    print("URL", a['href'])
