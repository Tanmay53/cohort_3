from bs4 import  BeautifulSoup
import requests

page = requests.get("https://www.wikipedia.org/")

print(page)