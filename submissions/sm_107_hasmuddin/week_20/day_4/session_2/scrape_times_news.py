import requests
from bs4 import BeautifulSoup
url = "https://timesofindia.indiatimes.com/briefs"
r = requests.get(url)
soup = BeautifulSoup(r.text, "html.parser")
content = soup.find_all("div", {"class": "wrapper clearfix politics"})
for c in content:
    print(c.text)
    print("________________")
