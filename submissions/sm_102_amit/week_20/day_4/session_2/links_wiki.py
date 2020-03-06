import sys
import requests
from bs4 import BeautifulSoup

res = requests.get("https://en.wikipedia.org/wiki/Python_(programming_language)")
wiki = BeautifulSoup(res.text, "html.parser")
c = 1
for i in wiki.find_all("a"):
  print(str(c) + ": ", i)
  c += 1