#Made this to get inspirational quotes for the quote generator. 
# Uses requests and beautiful soup to scrape quotes from a website.
#bs4 and requests not included in dependencies.

import requests
from bs4 import BeautifulSoup
URL = "https://www.keepinspiring.me/quotes-about-books-and-reading/"
page = requests.get(URL)

soup = BeautifulSoup(page.content, "html.parser")
blocks = soup.find_all("blockquote", class_="wp-block-quote is-style-large")
quotes = []
for block in blocks:
    quotes.append(block.find("p").text+" –"+block.find("cite").text)
print(quotes)
