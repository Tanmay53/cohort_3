import requests
from bs4 import BeautifulSoup
url1 = "https://timesofindia.indiatimes.com/briefs"
url2 = "https://sports.ndtv.com/cricket"
r = requests.get(url1)
r2 = requests.get(url2)
soup = BeautifulSoup(r.text, "html.parser")
content = soup.find_all("h2")
soup2 = BeautifulSoup(r2.text, "html.parser")
content2 = soup2.find_all("a", {"class": "item-title"})
with open("./news.txt", "a") as news:
    for c in range(20):
        print(content[c].text)
        news.writelines(content[c].text+"\n")

    for m in content2:
        print(m.text)
        news.writelines(m.text + "\n")
    news.close()
