import requests
from bs4 import BeautifulSoup


# scrape Times of india
def scrape_toi():
    url = 'https://timesofindia.indiatimes.com/briefs'
    result = requests.get(url)

    headings = []
    soup = BeautifulSoup(result.text, 'html.parser')
    for heading in soup.find_all('h2')[:30]:
        headings.append(heading.text)

    return headings
def scrape_ndtv():
    for i in range(1, 4):
        url = 'https://www.ndtv.com/latest/page-' + str(i)
        result = requests.get(url)
        
        soup = BeautifulSoup(result.text, 'html.parser')
        headings = []
        for div in soup.find_all('div', {'class':'new_storylising_img'}):
            headings.append(div.find('a')['title'])
    
    return headings[:30]


total_headings = scrape_toi() + scrape_ndtv()

# write to file
f_handle = open('news.txt', 'w')
for heading in total_headings:
    f_handle.write(heading + '\n')
f_handle.close()


