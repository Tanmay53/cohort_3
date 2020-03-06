from bs4 import BeautifulSoup
import requests


def fetch_request(url):
    page = requests.get(url)
    soup = BeautifulSoup(page.text, "html.parser")
    temp = soup.findAll("div", {"class": "brief_box"})
    for i in temp:
        print(i.getText())
        print("----------")


fetch_request("https://timesofindia.indiatimes.com/briefs")
