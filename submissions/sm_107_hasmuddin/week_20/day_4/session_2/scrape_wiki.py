import requests
from bs4 import BeautifulSoup
url = "https://en.wikipedia.org/wiki/Python"
r = requests.get(url)
soup = BeautifulSoup(r.text, "html.parser")
content = soup.find("div", {"id": "content"})
print(content.text)
