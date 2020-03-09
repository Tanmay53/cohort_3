import requests
from bs4 import BeautifulSoup

url = "https://en.wikipedia.org/wiki/Python_(programming_language)"
response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')

get_links = soup.find_all("a")
for i in get_links:
    print(i)
    print("----------------")