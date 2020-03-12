import requests
from bs4 import BeautifulSoup

brief_url = "https://timesofindia.indiatimes.com/briefs"
ndtv_url = "https://www.ndtv.com/search?searchtext=briefs"

brief_res = requests.get(brief_url)
ndtv_res = requests.get(ndtv_url)
# print(ndtv_res)

brief_soup = BeautifulSoup(brief_res.text, 'html.parser')
ndtv_soup = BeautifulSoup(ndtv_res.text, 'html.parser')

briefs_toi = brief_soup.find_all('div', {'class': 'brief_box'})
briefs_ndtv = brief_soup.find_all('div', {'class': 'brief_box'})


print("30 Briefs news of TOI")
for i in range(30):
    print(briefs_toi[i].text)
    print('TOI----------', i)

print("30 Briefs news of NDTV")          
for i in range(30):
    print(briefs_ndtv[i].text, i)
    print('ndtv---------------')