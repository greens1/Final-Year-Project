from lxml import etree
#population of one country for one yearz

def printOption1(data): #prints extra line 7 PER PAGE
    #data: 0 = country; 1 = population; 2 = year; 3 = indicator
    if data[1] == "None": print ("The data you have requested is unavailable.\nPlease try another year.")
    else:
        print("\nThe " + data[3].lower() + " population of " + data[0] + " in " + data[2] + " was " + data[1])
    countryName = etree.Element("Country", name=data[0])
    print(printSingleCountryXML(countryName, data))

def printSingleCountryXML (countryTag, data):
    # data: 0 = country; 1 = population; 2 = year; 3 = indicator
    # year
    year = etree.SubElement(countryTag, "Year", date=data[2])

    indicator = etree.SubElement(year, "Demographic", type=data[3])

    #population
    population = etree.SubElement(indicator, "Population")
    population.text = data[1]

    printXML (countryTag)

#%of one country compared to another
def printOption2(countryMF, countryT):
    # data: 0 = country; 1 = population; 2 = year; 3 = indicator

    x = int(countryMF[1]) / int(countryT[1])
    x *= 100
    #rounding to 2 decimal places
    xPrint = round(x, int(2))

    print("\nThe " + countryMF[3].lower() + " population of " + countryMF[0] + " in " + countryMF[2] + "(" + countryMF[1] + ") was " +
          str(xPrint) + "% of its " + countryT[3].lower() + " population in " + countryT[2] + "(" + countryT[1] + ").")

    # overview of the two countries involved
    print("\n" + countryMF[0] + " : " + countryMF[1] + " : " + countryMF[2] + " : " + countryMF[3])
    print(countryT[0] + " : " + countryT[1] + " : " + countryT[2] + " : " + countryT[3])

    countryName = etree.Element("Country", name=countryMF[0])
    year = etree.SubElement(countryName, "Year", date=countryMF[2])
    addToXML(countryName, countryMF)
    addToXML(countryName, countryT)
    printXML(countryName)

def addToXML (indiTag, data): #needs to relate exactly to tag not string
    # data: 0 = country; 1 = population; 2 = year; 3 = indicator
    # year
    indicate = etree.SubElement(indiTag, "Demographic_Indicator", type=data[3])

    # population
    population = etree.SubElement(indicate, "Population")
    population.text = data[1]


def printXML (countryTag):
    print("\n" + etree.tostring(countryTag, pretty_print=True).decode('utf-8'))


#option 3
def agePrint(data, ages):
    # parse:[countryOut, popOut, yearOut, countryIndicator]
    print("\nThe " + data[3].lower() + " population of " + data[0] + ", for those in the age bracket " + ages + " years old was " +
        data[1] + " in " + data[2] + ".")
    countryName = etree.Element("Country", name=data[0])
    year = etree.SubElement(countryName, "Year", date=data[2])
    demographic = etree.SubElement(year, "Demographic_Indicator", date=data[3])
    age = etree.SubElement(demographic, "Age_Range", type=ages)
    population = etree.SubElement(age, "Population")
    population.text = data[1]
    printXML(countryName)