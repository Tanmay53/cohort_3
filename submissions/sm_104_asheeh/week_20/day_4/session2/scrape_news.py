import requests
from bs4 import BeautifulSoup

url_toi = "https://timesofindia.indiatimes.com/briefs"
url_ndtv = "https://www.ndtv.com/search?searchtext=briefs-"
response_toi = requests.get(url_toi)
response_ndtv = requests.get(url_ndtv)

soup_toi = BeautifulSoup(response_toi.text, 'html.parser')
soup_ndtv = BeautifulSoup(response_ndtv.text, 'html.parser')

briefs_toi = soup_toi('div', {'class': 'brief_box'})
briefs_ndtv = soup_ndtv('strong', {'class': 'topic_strong_title'})

briefs_list = []
briefs_list.append("\nTimes Of India Briefs \n\n")
print("Times Of India Briefs")
for i in range(30):
    print(briefs_toi[i].text)
    briefs_list.append(briefs_toi[i].text)
    print("--------------")
briefs_list.append("\n\nNDTV Briefs \n\n")    
print("NDTV Briefs")
for i in range(25):
    print(briefs_ndtv[i].text)
    briefs_list.append(briefs_ndtv[i].text)
    print("*************")

with open("news.txt", "a") as text_file:
    for ele in briefs_list:
        text_file.write(ele.encode('utf8'))
        text_file.write("\n")
    text_file.close()