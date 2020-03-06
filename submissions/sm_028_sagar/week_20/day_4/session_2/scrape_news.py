import csv
import requests
from bs4 import BeautifulSoup

url = 'https://timesofindia.indiatimes.com/briefs'

file1 = open("./news.txt","w") 

r = requests.get(url)
soup = BeautifulSoup(r.text, 'html.parser')
briefs = soup.find_all('div',{'class':'brief_box'})

for i in briefs:
    file1.write(i.text+'\n')

url1 = 'https://www.ndtv.com/latest'

y = requests.get(url1)
soup = BeautifulSoup(y.text, 'html.parser')
news = soup.find_all('div',{'class':'nstory_header'})
for j in news:
    file1.write(j.text+'\n')




