function retrieveS1() {
    var countryCode = document.getElementById("country1").value;
    var year = document.getElementById("year1").value;
    var popURL = "http://api.worldbank.org/v2/countries/" + countryCode + "/indicators/SP.POP.TOTL?per_page=58";

    $.ajax({
        method: "GET",
        url: popURL
    }).success(function (data) {
        //when finished
        if (data != null) {
            var xmlDoc = data;
            var x = xmlDoc.getElementsByTagName("wb:data");
            var i;
            var population = 0;
            var y = 0;
            for (i = 0; i < x.length; i++) {
                if (x[i].getElementsByTagName("wb:date")[0].childNodes[0].nodeValue === year) {
                    population = x[i].getElementsByTagName("wb:value")[0].childNodes[0].nodeValue;
                }
            }
            document.getElementById("yearOutput").innerHTML = "Population: " + population;
        }
    }).fail(function (e) {
        console.log("API Error " + e);
    });
}

function retrieveS2() {
    var countryCode = document.getElementById("country2").value;
    var year = document.getElementById("year2").value;
    var gender = document.getElementById("gender1").value;
    var popURL = "http://api.worldbank.org/v2/countries/" + countryCode + "/indicators/" + gender + "?per_page=58";

    $.ajax({
        method: "GET",
        url: popURL
    }).success(function (data) {
        //when finished
        if (data != null) {
            var xmlDoc = data;
            var x = xmlDoc.getElementsByTagName("wb:data");
            var i;
            var population = 0;
            var y = 0;
            for (i = 0; i < x.length; i++) {

                if (x[i].getElementsByTagName("wb:date")[0].childNodes[0].nodeValue === year) {
                    population = x[i].getElementsByTagName("wb:value")[0].childNodes[0].nodeValue;
                }
            }
            document.getElementById("yearOutput").innerHTML = "Population: " + population;
        }
    }).fail(function (e) {
        console.log("API Error " + e);
    });
}

function retrieveS3() {
    var countryCode = document.getElementById("country3").value;
    var year = document.getElementById("year3").value;
    var gender = document.getElementById("gender2").value;
    var age = document.getElementById("age").value;
    var ageURL = "https://api.worldbank.org/v2/en/country/" + countryCode + "/indicator/SP.POP" + age + gender + "?per_page=58";

    $.ajax({
        method: "GET",
        url: ageURL
    }).success(function (data) {
        //when finished
        if (data != null) {
            var xmlDoc = data;
            var x = xmlDoc.getElementsByTagName("wb:data");
            var i;
            var population = 0;
            var y = 0;
            for (i = 0; i < x.length; i++) {

                if (x[i].getElementsByTagName("wb:date")[0].childNodes[0].nodeValue === year) {
                    population = x[i].getElementsByTagName("wb:value")[0].childNodes[0].nodeValue;
                }
            }
            var array = countries();

            document.getElementById("yearOutput").innerHTML = "The population is : " + population;
        }
    }).fail(function (e) {
        console.log("API Error " + e);
    });
}

function tpButton() {
    document.getElementById("totPop").style.display = "initial";
    document.getElementById("genPop").style.display = "none";
    document.getElementById("gaPop").style.display = "none";
    var select = document.getElementById("country1");
    var array = countries();
    for (var key in array) {
        var value = array[key]
        var opt = document.createElement('option');
        opt.value = key;
        opt.innerHTML = value;
        select.appendChild(opt);
    }
}

function gpButton() {
    document.getElementById("totPop").style.display = "none";
    document.getElementById("genPop").style.display = "initial";
    document.getElementById("gaPop").style.display = "none";
    var select = document.getElementById("country2");
    var array = countries();
    for (var key in array) {
        var value = array[key]
        var opt = document.createElement('option');
        opt.value = key;
        opt.innerHTML = value;
        select.appendChild(opt);
    }
}

function gaButton() {
    document.getElementById("totPop").style.display = "none";
    document.getElementById("genPop").style.display = "none";
    document.getElementById("gaPop").style.display = "initial";
    var select = document.getElementById("country3");
    var array = countries();
    for (var key in array) {
        var value = array[key]
        var opt = document.createElement('option');
        opt.value = key;
        opt.innerHTML = value;
        select.appendChild(opt);
    }
}

function countries() {
    var dict = {};
    dict['ABW'] = "Aruba";
    dict['AFG'] = "Afghanistan";
    dict['AGO'] = "Angola";
    dict['AIA'] = "Anguilla";
    dict['ALA'] = "Aland Islands";
    dict['ALB'] = "Albania";
    dict['AND'] = "Andorra";
    dict['ARE'] = "United Arab Emirates";
    dict['ARG'] = "Argentina";
    dict['ARM'] = "Armenia";
    dict['ASM'] = "American Samoa";
    dict['ATG'] = "Antigua and Barbuda";
    dict['AUS'] = "Australia";
    dict['AUT'] = "Austria";
    dict['AZE'] = "Azerbaijan";
    dict['BDI'] = "Burundi";
    dict['BEL'] = "Belgium";
    dict['BEN'] = "Benin";
    dict['BFA'] = "Burkina Faso";
    dict['BGD'] = "Bangladesh";
    dict['BGR'] = "Bulgaria";
    dict['BHR'] = "Bahrain";
    dict['BHS'] = "Bahamas";
    dict['BIH'] = "Bosnia and Herzegovina";
    dict['BLR'] = "Belarus";
    dict['BLZ'] = "Belize";
    dict['BMU'] = "Bermuda";
    dict['BOL'] = "Bolivia";
    dict['BRA'] = "Brazil";
    dict['BRB'] = "Barbados";
    dict['BVT'] = "Bouvet Island";
    dict['BWA'] = "Botswana";
    dict['CAF'] = "Central African Republic";
    dict['CAN'] = "Canada";
    dict['CCK'] = "Cocos Islands";
    dict['CHE'] = "Switzerland";
    dict['CHL'] = "Chile";
    dict['CHN'] = "China";
    dict['CIV'] = "Cote d'Ivoire";
    dict['CMR'] = "Cameroon";
    dict['COD'] = "Congo, the Democratic Republic of the";
    dict['COG'] = "Congo";
    dict['COL'] = "Colombia";
    dict['COM'] = "Comoros";
    dict['CPV'] = "Cabo Verde";
    dict['CRI'] = "Costa Rica";
    dict['CUB'] = "Cuba";
    dict['CUW'] = "Curacao";
    dict['CYM'] = "Cayman Islands";
    dict['CYP'] = "Cyprus";
    dict['CZE'] = "Czechia";
    dict['DEU'] = "Germany";
    dict['DJI'] = "Djibouti";
    dict['DMA'] = "Dominica";
    dict['DNK'] = "Denmark";
    dict['DOM'] = "Dominican Republic";
    dict['DZA'] = "Algeria";
    dict['ECU'] = "Ecuador";
    dict['EGY'] = "Egypt";
    dict['ERI'] = "Eritrea";
    dict['ESH'] = "Western Sahara";
    dict['ESP'] = "Spain";
    dict['EST'] = "Estonia";
    dict['ETH'] = "Ethiopia";
    dict['FIN'] = "Finland";
    dict['FJI'] = "Fiji";
    dict['FLK'] = "Falkland Islands";
    dict['FRA'] = "France";
    dict['FRO'] = "Faroe Islands";
    dict['FSM'] = "Micronesia";
    dict['GAB'] = "Gabon";
    dict['GBR'] = "United Kingdom";
    dict['GEO'] = "Georgia";
    dict['GGY'] = "Guernsey";
    dict['GHA'] = "Ghana";
    dict['GIB'] = "Gibraltar";
    dict['GIN'] = "Guinea";
    dict['GLP'] = "Guadeloupe";
    dict['GMB'] = "Gambia";
    dict['GNB'] = "Guinea-Bissau";
    dict['GNQ'] = "Equatorial Guinea";
    dict['GRC'] = "Greece";
    dict['GRD'] = "Grenada";
    dict['GRL'] = "Greenland";
    dict['GTM'] = "Guatemala";
    dict['GUF'] = "French Guiana";
    dict['GUM'] = "Guam";
    dict['GUY'] = "Guyana";
    dict['HKG'] = "Hong Kong";
    dict['HMD'] = "Heard Island and McDonald Islands";
    dict['HND'] = "Honduras";
    dict['HRV'] = "Croatia";
    dict['HTI'] = "Haiti";
    dict['HUN'] = "Hungary";
    dict['IDN'] = "Indonesia";
    dict['IMN'] = "Isle of Man";
    dict['IND'] = "India";
    dict['IOT'] = "British Indian Ocean Territory";
    dict['IRL'] = "Ireland";
    dict['IRN'] = "Iran";
    dict['IRQ'] = "Iraq";
    dict['ISL'] = "Iceland";
    dict['ISR'] = "Israel";
    dict['ITA'] = "Italy";
    dict['JAM'] = "Jamaica";
    dict['JEY'] = "Jersey";
    dict['JOR'] = "Jordan";
    dict['JPN'] = "Japan";
    dict['KAZ'] = "Kazakhstan";
    dict['KEN'] = "Kenya";
    dict['KGZ'] = "Kyrgyzstan";
    dict['KHM'] = "Cambodia";
    dict['KIR'] = "Kiribati";
    dict['PRK'] = "North Korea";
    dict['KOR'] = "South Korea";
    dict['KWT'] = "Kuwait";
    dict['LAO'] = "Lao People's Democratic Republic";
    dict['LBN'] = "Lebanon";
    dict['LBR'] = "Liberia";
    dict['LBY'] = "Libya";
    dict['LCA'] = "Saint Lucia";
    dict['LIE'] = "Liechtenstein";
    dict['LKA'] = "Sri Lanka";
    dict['LSO'] = "Lesotho";
    dict['LTU'] = "Lithuania";
    dict['LUX'] = "Luxembourg";
    dict['LVA'] = "Latvia";
    dict['MAC'] = "Macao";
    dict['MAF'] = "Saint Martin";
    dict['MAR'] = "Morocco";
    dict['MCO'] = "Monaco";
    dict['MDA'] = "Moldova";
    dict['MDG'] = "Madagascar";
    dict['MDV'] = "Maldives";
    dict['MEX'] = "Mexico";
    dict['MHL'] = "Marshall Islands";
    dict['MKD'] = "Macedonia";
    dict['MLI'] = "Mali";
    dict['MLT'] = "Malta";
    dict['MMR'] = "Myanmar";
    dict['MNE'] = "Montenegro";
    dict['MNG'] = "Mongolia";
    dict['MNP'] = "Northern Mariana Islands";
    dict['MOZ'] = "Mozambique";
    dict['MRT'] = "Mauritania";
    dict['MSR'] = "Montserrat";
    dict['MTQ'] = "Martinique";
    dict['MUS'] = "Mauritius";
    dict['MWI'] = "Malawi";
    dict['MYS'] = "Malaysia";
    dict['MYT'] = "Mayotte";
    dict['NAM'] = "Namibia";
    dict['NCL'] = "New Caledonia";
    dict['NER'] = "Niger";
    dict['NGA'] = "Nigeria";
    dict['NIC'] = "Nicaragua";
    dict['NIU'] = "Niue";
    dict['NLD'] = "Netherlands";
    dict['NOR'] = "Norway";
    dict['NPL'] = "Nepal";
    dict['NRU'] = "Nauru";
    dict['NZL'] = "New Zealand";
    dict['OMN'] = "Oman";
    dict['PAK'] = "Pakistan";
    dict['PAN'] = "Panama";
    dict['PER'] = "Peru";
    dict['PHL'] = "Philippines";
    dict['PLW'] = "Palau";
    dict['PNG'] = "Papua New Guinea";
    dict['POL'] = "Poland";
    dict['PRI'] = "Puerto Rico";
    dict['PRT'] = "Portugal";
    dict['PRY'] = "Paraguay";
    dict['PSE'] = "Palestine, State of";
    dict['PYF'] = "French Polynesia";
    dict['QAT'] = "Qatar";
    dict['REU'] = "Reunion";
    dict['ROU'] = "Romania";
    dict['RUS'] = "Russia";
    dict['RWA'] = "Rwanda";
    dict['SAU'] = "Saudi Arabia";
    dict['SDN'] = "Sudan";
    dict['SEN'] = "Senegal";
    dict['SGP'] = "Singapore";
    dict['SLB'] = "Solomon Islands";
    dict['SLE'] = "Sierra Leone";
    dict['SLV'] = "El Salvador";
    dict['SMR'] = "San Marino";
    dict['SOM'] = "Somalia";
    dict['SPM'] = "Saint Pierre and Miquelon";
    dict['SRB'] = "Serbia";
    dict['SSD'] = "South Sudan";
    dict['STP'] = "Sao Tome and Principe";
    dict['SUR'] = "Suriname";
    dict['SVK'] = "Slovakia";
    dict['SVN'] = "Slovenia";
    dict['SWE'] = "Sweden";
    dict['SWZ'] = "Swaziland";
    dict['SXM'] = "Sint Maarten";
    dict['SYC'] = "Seychelles";
    dict['SYR'] = "Syria";
    dict['TCA'] = "Turks and Caicos";
    dict['TCD'] = "Chad";
    dict['TGO'] = "Togo";
    dict['THA'] = "Thailand";
    dict['TJK'] = "Tajikistan";
    dict['TKL'] = "Tokelau";
    dict['TKM'] = "Turkmenistan";
    dict['TLS'] = "Timor-Leste";
    dict['TON'] = "Tonga";
    dict['TTO'] = "Trinidad and Tobago";
    dict['TUN'] = "Tunisia";
    dict['TUR'] = "Turkey";
    dict['TUV'] = "Tuvalu";
    dict['TWN'] = "Taiwan";
    dict['TZA'] = "Tanzania";
    dict['UGA'] = "Uganda";
    dict['UKR'] = "Ukraine";
    dict['URY'] = "Uruguay";
    dict['USA'] = "USA";
    dict['UZB'] = "Uzbekistan";
    dict['VEN'] = "Venezuela";
    dict['VGB'] = "Virgin Islands, British";
    dict['VIR'] = "Virgin Islands, U.S.";
    dict['VNM'] = "Vietnam";
    dict['VUT'] = "Vanuatu";
    dict['WSM'] = "Samoa";
    dict['YEM'] = "Yemen";
    dict['ZAF'] = "South Africa";
    dict['ZMB'] = "Zambia";
    dict['ZWE'] = "Zimbabwe";
    return dict;
}