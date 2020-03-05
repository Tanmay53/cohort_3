from bs4 import  BeautifulSoup
import requests
from links_wiki import *

page = requests.get("https://www.wikipedia.org/")

soup = BeautifulSoup(page.content, 'html.parser')
divs = soup.find_all("a")

print_link_text(divs)



