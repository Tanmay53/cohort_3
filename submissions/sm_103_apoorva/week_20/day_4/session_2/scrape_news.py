import requests
from bs4 import BeautifulSoup

r = requests.get('https://timesofindia.indiatimes.com/briefs')
ndtv = requests.get('https://www.ndtv.com/india?pfrom=home-mainnavgation')
data_times = r.text
ndtv_data = ndtv.text

soup_times = BeautifulSoup(data_times, 'html.parser')
soup_ndtv = BeautifulSoup(ndtv_data, 'html.parser')

news = open("/home/apoorva/coding/week_20/day_4/session_2/news.txt","w") 


news.write("Times of India")
for brief in soup_times.find_all("div",{"class":'brief_box'}):
    news.write("\n")
    news.write(brief.getText())
    news.write("\n")

news.write("\n\n")
news.write("NDTV")
news.write("\n\n")
for ndtv_news in soup_ndtv.find_all("div",{"class":'nstory_intro'}):
    news.write("\n")
    news.write(ndtv_news.getText())
    news.write("\n")

news.close()
