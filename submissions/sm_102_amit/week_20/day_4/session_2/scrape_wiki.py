import sys
import requests
from bs4 import BeautifulSoup

res = requests.get("https://en.wikipedia.org/wiki/Python_(programming_language)")
wiki = BeautifulSoup(res.content, "html.parser")
output = wiki.find("div", {"id": "content"})
print(output)