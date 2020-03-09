from bs4 import BeautifulSoup
import requests


def fetch_request(url):
    page = requests.get(url)
    soup = BeautifulSoup(page.text, "html.parser")
    temp = soup.findAll("a")
    for i in temp:
        print(i.get("href"))
        print("----------")


fetch_request("https://en.wikipedia.org/wiki/Ed_Sheeran")
