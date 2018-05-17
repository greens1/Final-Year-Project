from urllib import request
from xml.dom import minidom

popURL = "http://api.worldbank.org/v2/countries/{}/indicators/{}?per_page=58" #one response
popAgeURL = "https://api.worldbank.org/v2/en/country/{}/indicator/SP.POP{}{}"

indicators = {
    "Female" : "SP.POP.TOTL.FE.IN",
    "Male" : "SP.POP.TOTL.MA.IN",
    "Total" : "SP.POP.TOTL"
}

ageIndicators = {
    "Female" : ".FE.IN",
    "Male" : ".MA.IN",
    "Total" : ".TO"
}

ageRange = {
    "0-14" : ".0014",
    "15-64" : ".1564",
    "65-" : ".65UP"
    }

def fetch_data(link):
    with request.urlopen(link) as response:
        data = response.read()
    return minidom.parseString(data)

def parse_data(data, year, countryIndicator, age):
    if (year < 0):
        return print("This year is not valid / lacks information")
    else:
        countryData = (data.getElementsByTagNameNS("http://www.worldbank.org", "country")[year])
        countryOut = countryData.firstChild.data

        yearData = (data.getElementsByTagNameNS("http://www.worldbank.org", "date")[year])
        yearOut = yearData.firstChild.data

        popData = (data.getElementsByTagNameNS("http://www.worldbank.org", "value")[year])
        if popData.firstChild == None: popOut = "None"
        else:
            popOut = popData.firstChild.data

    output = {"country" : countryOut, "year" : yearOut, "indicator" : countryIndicator, "age" : age, "population" : popOut}
    return output

def findCountry(country, year, indicator, age):
    year=pick_year(year)

    if age == None:
        indicator = indicators[indicator]
        data = fetch_data(popURL.format(country, indicator))
        outputData = parse_data(data, year, indicator, age)  # normaldata

    else:
        indicator = ageIndicators[indicator] #T/M/F
        data = fetch_data(popAgeURL.format(country, ageRange[age], indicator))
        outputData = parse_data(data, year, indicator, age)

    return outputData

def pick_year(choice):
    num = 2017 - int(choice)
    return num