from bs4 import BeautifulSoup
import requests


def fetch_request(url):
    page1 = requests.get(url)
    page2 = requests.get("https://timesofindia.indiatimes.com/briefs")
    soup = BeautifulSoup(page1.text, "html.parser")
    new_soup = BeautifulSoup(page2.text, "html.parser")
    temp1 = soup.findAll("div", {"class": "nstory_header"})
    temp2 = new_soup.findAll("h2")
    save_data = []
    for i in range(30):
        type(temp2[i].getText())
        save_data.append(temp2[i].getText())
        save_data.append("-________-")

    for i in range(30):
        save_data.append(temp2[i].getText())
        save_data.append("-------")
    with open("news.txt", "a") as text_file:
        for k in save_data:
            text_file.write(k)
            text_file.write("\n")


fetch_request("https://www.ndtv.com/india?pfrom=home-mainnavgation")
