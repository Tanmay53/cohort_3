import requests
from bs4 import BeautifulSoup

page = requests.get("https://www.wikipedia.org/")

print(page.content)
