from main import *
from indicators import *

def pick_country():
    #Select Country
    choice = input("Country / Code ('Show')>>")

    #Show Country Code List
    if choice == "Show":
        for key, item in country_codes.items():
            print(key + " " + item)
        choice = input(">>")

    if len(choice) == 3:
        return choice
    else:
        selected = country_codes[choice]
    return selected


def pick_year(choice):
    num = 2017 - int(choice)
    return num


def pick_indicator():
    for key, item in indicators2.items():
        print(key)
    choice = input("Indicator >> " )
    variables = (indicators[choice], choice)
    #variables[0]=SP.POP... // var[1]=Total/Female/Male
    return variables


def age_range():
    for key, item in ageRange.items():
        print(key)
    choice = input("Select your age range >>" )
    bracket = (ageRange[choice], choice)
    #variables[0]=SP.POP... // var[1]=0-14//15-64//65++
    return bracket


def pickAgeIndicator():
    for key, item in ageIndicators.items():
        print(key)
    choice = input("Indicator >> " )
    variables = (ageIndicators[choice], choice)
    #variables[0]=SP.POP... // var[1]=Total/Female/Male
    return variables


def main():
    #Question User
    print("Years available: 1960 - 2016")
    print ('\n'.join(mainMenu))
    choice = input (">> ")

    chosenCountry = pick_country()
    year = input("Year >> ")
    chosenYear = pick_year(year)

    #criteria required for search scenarios
    criteria = (chosenCountry, chosenYear)

    #different functions called depending on scenario
    if choice == "1":
        country(choice, criteria)
    elif choice == "2":
        mfPopulation("0", criteria)
    elif choice == "3":
        ageGroup(criteria)


if __name__ == "__main__":
    main()
