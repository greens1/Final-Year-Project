from urllib import request
from xml.dom import minidom
from mainComponents import *
from indicators import *
from printOptions import *


def fetch_data(link):
    with request.urlopen(link) as response:
        data = response.read()
    return minidom.parseString(data)


def parse_data(data, num, countryIndicator):
    if (num < 0):
        return print("This year is not valid / lacks information")
    else:
        #data[0]
        countryData = (data.getElementsByTagNameNS("http://www.worldbank.org", "country")[num])
        countryOut = countryData.firstChild.data

        #data[1]
        popData = (data.getElementsByTagNameNS("http://www.worldbank.org", "value")[num])
        if popData.firstChild == None: popOut = "None"
        else:
            popOut = popData.firstChild.data

        #data[2]
        yearData = (data.getElementsByTagNameNS("http://www.worldbank.org", "date")[num])
        yearOut = yearData.firstChild.data

    output = [countryOut, popOut, yearOut, countryIndicator]
    return output

#1/2
def country(num, criteria):
    #Scenario 1 does not require an indicator
    if num == "1":
        indicator = ("SP.POP.TOTL", "Total")
    #Scenario 2 indicator selector
    else:
        indicator = pick_indicator()

    #Scenario 1/2 URL formatter
    data = fetch_data(url1.format(criteria[0], indicator[0]))
    outputData = parse_data(data, criteria[1], indicator[1])

    #Print if Scenario 1
    if num == "1":
        printOption1(outputData)

    #Scenario 2
    else:
        return outputData

#2
def mfPopulation(num, criteria):
    #Choose country using Scenario 1 function
    countryChosen = country(num, criteria)

    #Calculating proportion percentages
    totalIndicator = ("SP.POP.TOTL", "Total")

    #Format URL for "Total" figure
    data = fetch_data(url1.format(criteria[0], totalIndicator[0]))
    totalCountryChosen = parse_data(data, criteria[1], totalIndicator[1])

    printOption2(countryChosen, totalCountryChosen)

#3
def ageGroup(criteria):
    #Age Range selector
    ages = age_range()

    #Pick Indicator - different URL format than Scen 1/2
    indicator = pickAgeIndicator()

    #Format URL
    data = fetch_data(popAgeURL.format(criteria[0], ages[0], indicator[0]))
    outputData = parse_data(data, criteria[1], indicator[1])

    agePrint(outputData, ages[1])