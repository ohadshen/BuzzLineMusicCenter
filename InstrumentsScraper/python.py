import requests
from bs4 import BeautifulSoup
import json

# create main
# create main that run on default


def getAcousticGuitarsFromThomann():
    acousticGuitarsList = []

    urls = [
        'https://www.thomann.de/intl/cat_GK_giweba.html?shp=eyJjb3VudHJ5IjoiZ2IiLCJjdXJyZW5jeSI6NjcsImxhbmd1YWdlIjoyfQ%3D%3D&reload=1',
        'https://www.thomann.de/intl/cat_GK_giwefo.html?shp=eyJjb3VudHJ5IjoiZ2IiLCJjdXJyZW5jeSI6NjcsImxhbmd1YWdlIjoyfQ%3D%3D&reload=1',
        'https://www.thomann.de/intl/cat_GK_giwe12.html?shp=eyJjb3VudHJ5IjoiZ2IiLCJjdXJyZW5jeSI6NjcsImxhbmd1YWdlIjoyfQ%3D%3D&reload=1']

    for url in urls:
        acousticGuitarsList += scrapeFromThomann(url)

    return acousticGuitarsList


def getElectricGuitarsFromThomann():
    electricGuitarsList = []

    urls = [
        'https://www.thomann.de/intl/cat_GK_giebj4.html?shp=eyJjb3VudHJ5IjoiZ2IiLCJjdXJyZW5jeSI6NjcsImxhbmd1YWdlIjoyfQ%3D%3D&reload=1',
        'https://www.thomann.de/intl/cat_GK_giegte.html?shp=eyJjb3VudHJ5IjoiZ2IiLCJjdXJyZW5jeSI6NjcsImxhbmd1YWdlIjoyfQ%3D%3D&reload=1']
    # use scrape from thomann on all urls and merge the list
    for url in urls:
        electricGuitarsList += scrapeFromThomann(url)

    return electricGuitarsList


def getBassGuitarsFromThomann():
    bassGuitarsList = []

    urls = [
        'https://www.thomann.de/intl/cat_GK_giegja.html?shp=eyJjb3VudHJ5IjoiZ2IiLCJjdXJyZW5jeSI6NjcsImxhbmd1YWdlIjoyfQ%3D%3D&reload=1',
        'https://www.thomann.de/intl/cat_GK_giebp4.html?shp=eyJjb3VudHJ5IjoiZ2IiLCJjdXJyZW5jeSI6NjcsImxhbmd1YWdlIjoyfQ%3D%3D&reload=1']
    # use scrape from thomann on all urls and merge the list
    for url in urls:
        bassGuitarsList += scrapeFromThomann(url)

    return bassGuitarsList


def scrapeFromThomann(url):
    page = requests.get(url)
    soup = BeautifulSoup(page.content, "html.parser")
    rawInstruments = soup.find_all("div", class_="product")
    parsedInstruments = []

    for instrument in rawInstruments:
        parsedInstruments.append({
            'company': instrument.find('span', class_='title__manufacturer').text,
            'name': instrument.find('img')['alt'],
            'img': instrument.find('source')['data-srcset'],
            'price': instrument.find('span', class_='fx-typography-price-primary').text.strip().replace('\xa0', '')
        })

    return parsedInstruments


# def getYamahaGuitarsKleyZemer():
#     url = "https://www.kley-zemer.co.il/%D7%92%D7%99%D7%98%D7%A8%D7%95%D7%AA_%D7%90%D7%A7%D7%95%D7%A1%D7%98%D7%99%D7%95%D7%AA?%D7%99%D7%A6%D7%A8%D7%9F=233631&bsfilter-15512=233631"
#     page = requests.get(url)
#     soup = BeautifulSoup(page.content, "html.parser")
#     rawInstruments = soup.find_all("div", class_="product")
#     # create list of instruments that extract the name and price in for loop

#     # rawInstruments = []
#     # for instrument in rawInstruments:
#     return rawInstruments[0]


# def getAcusticGuitarsHalilit():
#     url = "https://www.halilit.com/23610-Acoustic-Guitars"
#     page = requests.get(url)
#     soup = BeautifulSoup(page.content, "html.parser")
#     rawInstruments = soup.find_all(
#         "div", class_="layout_list_item item zoom-img_grid1 padding--responsive box box7  col-xs-6 col-sm-6 col-md-4  exsist item__onlyContactChecked with_wishlist")
#     # create list of instruments that extract the name and price in for loop

#     parsedInstruments = []
#     for instrument in rawInstruments:
#         # name = instrument.find('img')['alt']
#         # price = instrument.find('div', class_='oldprice').text
#         # print(name, price)
#         # return as json object
#         # parsedInstruments.append({
#         #     "name": name,
#         #     "price": price
#         # })
#         parsedInstruments.append(
#             instrument
#         )

#     return parsedInstruments


def main():

    electricGuitars = getElectricGuitarsFromThomann()
    acousticGuitars = getAcousticGuitarsFromThomann()
    bassGuitars = getBassGuitarsFromThomann()

    guitars = {
        'companies': list(set([item['company'] for item in electricGuitars + acousticGuitars + bassGuitars])),
        'electric': electricGuitars,
        'acoustic': acousticGuitars,
        'bass': bassGuitars
    }

    with open('./guitars.json', 'w') as f:
        json.dump(guitars, f)


if __name__ == "__main__":
    main()
