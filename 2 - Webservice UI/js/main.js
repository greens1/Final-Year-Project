function retrieveS1(){
	var countryCode =document.getElementById("country1").value;
	console.log(countryCode);
	var year =document.getElementById("year1").value;
	//window.alert("Country Code: "+countryCode+" Year: "+year);

	var popURL = "https://api.worldbank.org/v2/countries/"+countryCode+"/indicators/SP.POP.TOTL?per_page=58";
	console.log(popURL);
	$.ajax({
		method: "GET",
		url: popURL
	}).success(function(data){
		//when finished
		if(data!=null){
			console.log(data);
			var xmlDoc = data;
			var x = xmlDoc.getElementsByTagName("wb:data");
			console.log(x.length);
			var i;
			var population = 0;
			var y = 0;
			for(i=0;i<x.length;i++){

				//console.log(x[i].getElementsByTagName("wb:date")[0].childNodes[0].nodeValue);
				if(x[i].getElementsByTagName("wb:date")[0].childNodes[0].nodeValue==year){
					console.log("yes");
					population = x[i].getElementsByTagName("wb:value")[0].childNodes[0].nodeValue;
				}
			}
			document.getElementById("yearOutput").innerHTML = "Population: "+population;
			console.log(population);
		}
	}).fail(function(e){
		console.log("API Error "+e);
	});
}

function retrieveS2(){
	var countryCode =document.getElementById("country2").value;
	var year =document.getElementById("year2").value;
	var gender =document.getElementById("gender1").value;
	//window.alert("Country Code: "+countryCode+" Year: "+year + " Gender: " + gender);

	var popURL = "https://api.worldbank.org/v2/countries/"+countryCode+"/indicators/"+gender+"?per_page=58";
	console.log(popURL);

	$.ajax({
		method: "GET",
		url: popURL
	}).success(function(data){
		//when finished
		if(data!=null){
			console.log(data);
			var xmlDoc = data;
			var x = xmlDoc.getElementsByTagName("wb:data");
			console.log(x.length);
			var i;
			var population = 0;
			var y = 0;
			for(i=0;i<x.length;i++){

				//console.log(x[i].getElementsByTagName("wb:date")[0].childNodes[0].nodeValue);
				if(x[i].getElementsByTagName("wb:date")[0].childNodes[0].nodeValue==year){
					console.log("yes");
					population = x[i].getElementsByTagName("wb:value")[0].childNodes[0].nodeValue;
				}
			}
			document.getElementById("yearOutput").innerHTML = "Population: "+population;
			console.log(population);
		}
	}).fail(function(e){
		console.log("API Error "+e);
	});
}

function retrieveS3(){
	var countryCode =document.getElementById("country3").value;
	var year =document.getElementById("year3").value;
	var gender =document.getElementById("gender2").value;
	var age =document.getElementById("age").value;
	//window.alert("Country Code: "+countryCode+" Year: "+year + " Gender: " + gender + " Age: " + age);

	var ageURL = "https://api.worldbank.org/v2/en/country/"+countryCode+"/indicator/SP.POP"+age+gender+"?per_page=58";
	console.log(ageURL);

	$.ajax({
		method: "GET",
		url: ageURL
	}).success(function(data){
		//when finished
		if(data!=null){
			console.log(data);
			var xmlDoc = data;
			var x = xmlDoc.getElementsByTagName("wb:data");
			console.log(x.length);
			var i;
			var population = 0;
			var y = 0;
			for(i=0;i<x.length;i++){

				//console.log(x[i].getElementsByTagName("wb:date")[0].childNodes[0].nodeValue);
				if(x[i].getElementsByTagName("wb:date")[0].childNodes[0].nodeValue==year){
					console.log("yes");
					population = x[i].getElementsByTagName("wb:value")[0].childNodes[0].nodeValue;
				}
			}
			document.getElementById("yearOutput").innerHTML = "Population: "+population;
			console.log(population);
		}
	}).fail(function(e){
		console.log("API Error "+e);
	});
}

function tpButton(){
	document.getElementById("totPop").style.display="initial";
	document.getElementById("genPop").style.display="none";
	document.getElementById("gaPop").style.display="none";
	var select=document.getElementById("country1");
	var array = countries();
	console.log(array);
	for (var key in array) {
		var value = array[key]
		console.log(key + value);
		var opt = document.createElement('option');
		opt.value = key;
		opt.innerHTML = value;
		select.appendChild(opt);
	}
}

function gpButton(){
	document.getElementById("totPop").style.display="none";
	document.getElementById("genPop").style.display="initial";
	document.getElementById("gaPop").style.display="none";
	var select=document.getElementById("country2");
	var array = countries();
	console.log(array);
	for (var key in array) {
		var value = array[key]
		console.log(key + value);
		var opt = document.createElement('option');
		opt.value = key;
		opt.innerHTML = value;
		select.appendChild(opt);
	}	
}

function gaButton(){
	document.getElementById("totPop").style.display="none";
	document.getElementById("genPop").style.display="none";
	document.getElementById("gaPop").style.display="initial";
	var select=document.getElementById("country3");
	var array = countries();
	console.log(array);
	for (var key in array) {
		var value = array[key]
		console.log(key + value);
		var opt = document.createElement('option');
		opt.value = key;
		opt.innerHTML = value;
		select.appendChild(opt);
	}
}

function countries(){
	var dict = {};
dict['AFG'] = "Afghanistan";
dict['ALA'] = "Aland Islands";
dict['ALB'] = "Albania";
dict['DZA'] = "Algeria";
dict['ASM'] = "American Samoa";
dict['AND'] = "Andorra";
dict['AGO'] = "Angola";
dict['AIA'] = "Anguilla";
dict['ATA'] = "Antarctica";
dict['ATG'] = "Antigua and Barbuda";
dict['ARG'] = "Argentina";
dict['ARM'] = "Armenia";
dict['ABW'] = "Aruba";
dict['AUS'] = "Australia";
dict['AUT'] = "Austria";
dict['AZE'] = "Azerbaijan";
dict['BHS'] = "Bahamas";
dict['BHR'] = "Bahrain";
dict['BGD'] = "Bangladesh";
dict['BRB'] = "Barbados";
dict['BLR'] = "Belarus";
dict['BEL'] = "Belgium";
dict['BLZ'] = "Belize";
dict['BEN'] = "Benin";
dict['BMU'] = "Bermuda";
dict['BOL'] = "Bolivia";
dict['BIH'] = "Bosnia and Herzegovina";
dict['BWA'] = "Botswana";
dict['BVT'] = "Bouvet Island";
dict['BRA'] = "Brazil";
dict['IOT'] = "British Indian Ocean Territory";
dict['BGR'] = "Bulgaria";
dict['BFA'] = "Burkina Faso";
dict['BDI'] = "Burundi";
dict['CPV'] = "Cabo Verde";
dict['KHM'] = "Cambodia";
dict['CMR'] = "Cameroon";
dict['CAN'] = "Canada";
dict['CYM'] = "Cayman Islands";
dict['CAF'] = "Central African Republic";
dict['TCD'] = "Chad";
dict['CHL'] = "Chile";
dict['CHN'] = "China";
dict['CCK'] = "Cocos Islands";
dict['COL'] = "Colombia";
dict['COM'] = "Comoros";
dict['COG'] = "Congo";
dict['COD'] = "Congo, the Democratic Republic of the";
dict['CRI'] = "Costa Rica";
dict['CIV'] = "Cote d'Ivoire";
dict['HRV'] = "Croatia";
dict['CUB'] = "Cuba";
dict['CUW'] = "Curacao";
dict['CYP'] = "Cyprus";
dict['CZE'] = "Czechia";
dict['DNK'] = "Denmark";
dict['DJI'] = "Djibouti";
dict['DMA'] = "Dominica";
dict['DOM'] = "Dominican Republic";
dict['ECU'] = "Ecuador";
dict['EGY'] = "Egypt";
dict['SLV'] = "El Salvador";
dict['GNQ'] = "Equatorial Guinea";
dict['ERI'] = "Eritrea";
dict['EST'] = "Estonia";
dict['ETH'] = "Ethiopia";
dict['FLK'] = "Falkland Islands";
dict['FRO'] = "Faroe Islands";
dict['FJI'] = "Fiji";
dict['FIN'] = "Finland";
dict['FRA'] = "France";
dict['GUF'] = "French Guiana";
dict['PYF'] = "French Polynesia";
dict['ATF'] = "French Southern Territories";
dict['GAB'] = "Gabon";
dict['GMB'] = "Gambia";
dict['GEO'] = "Georgia";
dict['DEU'] = "Germany";
dict['GHA'] = "Ghana";
dict['GIB'] = "Gibraltar";
dict['GRC'] = "Greece";
dict['GRL'] = "Greenland";
dict['GRD'] = "Grenada";
dict['GLP'] = "Guadeloupe";
dict['GUM'] = "Guam";
dict['GTM'] = "Guatemala";
dict['GGY'] = "Guernsey";
dict['GIN'] = "Guinea";
dict['GNB'] = "Guinea-Bissau";
dict['GUY'] = "Guyana";
dict['HTI'] = "Haiti";
dict['HMD'] = "Heard Island and McDonald Islands";
dict['HND'] = "Honduras";
dict['HKG'] = "Hong Kong";
dict['HUN'] = "Hungary";
dict['ISL'] = "Iceland";
dict['IND'] = "India";
dict['IDN'] = "Indonesia";
dict['IRN'] = "Iran";
dict['IRQ'] = "Iraq";
dict['IRL'] = "Ireland";
dict['IMN'] = "Isle of Man";
dict['ISR'] = "Israel";
dict['ITA'] = "Italy";
dict['JAM'] = "Jamaica";
dict['JPN'] = "Japan";
dict['JEY'] = "Jersey";
dict['JOR'] = "Jordan";
dict['KAZ'] = "Kazakhstan";
dict['KEN'] = "Kenya";
dict['KIR'] = "Kiribati";
dict['KWT'] = "Kuwait";
dict['KGZ'] = "Kyrgyzstan";
dict['LAO'] = "Lao People's Democratic Republic";
dict['LVA'] = "Latvia";
dict['LBN'] = "Lebanon";
dict['LSO'] = "Lesotho";
dict['LBR'] = "Liberia";
dict['LBY'] = "Libya";
dict['LIE'] = "Liechtenstein";
dict['LTU'] = "Lithuania";
dict['LUX'] = "Luxembourg";
dict['MAC'] = "Macao";
dict['MKD'] = "Macedonia";
dict['MDG'] = "Madagascar";
dict['MWI'] = "Malawi";
dict['MYS'] = "Malaysia";
dict['MDV'] = "Maldives";
dict['MLI'] = "Mali";
dict['MLT'] = "Malta";
dict['MHL'] = "Marshall Islands";
dict['MTQ'] = "Martinique";
dict['MRT'] = "Mauritania";
dict['MUS'] = "Mauritius";
dict['MYT'] = "Mayotte";
dict['MEX'] = "Mexico";
dict['FSM'] = "Micronesia";
dict['MDA'] = "Moldova";
dict['MCO'] = "Monaco";
dict['MNG'] = "Mongolia";
dict['MNE'] = "Montenegro";
dict['MSR'] = "Montserrat";
dict['MAR'] = "Morocco";
dict['MOZ'] = "Mozambique";
dict['MMR'] = "Myanmar";
dict['NAM'] = "Namibia";
dict['NRU'] = "Nauru";
dict['NPL'] = "Nepal";
dict['NLD'] = "Netherlands";
dict['NCL'] = "New Caledonia";
dict['NZL'] = "New Zealand";
dict['NIC'] = "Nicaragua";
dict['NER'] = "Niger";
dict['NGA'] = "Nigeria";
dict['NIU'] = "Niue";
dict['PRK'] = "North Korea";
dict['MNP'] = "Northern Mariana Islands";
dict['NOR'] = "Norway";
dict['OMN'] = "Oman";
dict['PAK'] = "Pakistan";
dict['PLW'] = "Palau";
dict['PSE'] = "Palestine, State of";
dict['PAN'] = "Panama";
dict['PNG'] = "Papua New Guinea";
dict['PRY'] = "Paraguay";
dict['PER'] = "Peru";
dict['PHL'] = "Philippines";
dict['POL'] = "Poland";
dict['PRT'] = "Portugal";
dict['PRI'] = "Puerto Rico";
dict['QAT'] = "Qatar";
dict['REU'] = "Reunion";
dict['ROU'] = "Romania";
dict['RUS'] = "Russia";
dict['RWA'] = "Rwanda";
dict['LCA'] = "Saint Lucia";
dict['MAF'] = "Saint Martin";
dict['SPM'] = "Saint Pierre and Miquelon";
dict['WSM'] = "Samoa";
dict['SMR'] = "San Marino";
dict['STP'] = "Sao Tome and Principe";
dict['SAU'] = "Saudi Arabia";
dict['SEN'] = "Senegal";
dict['SRB'] = "Serbia";
dict['SYC'] = "Seychelles";
dict['SLE'] = "Sierra Leone";
dict['SGP'] = "Singapore";
dict['SXM'] = "Sint Maarten";
dict['SVK'] = "Slovakia";
dict['SVN'] = "Slovenia";
dict['SLB'] = "Solomon Islands";
dict['SOM'] = "Somalia";
dict['ZAF'] = "South Africa";
dict['KOR'] = "South Korea";
dict['SSD'] = "South Sudan";
dict['ESP'] = "Spain";
dict['LKA'] = "Sri Lanka";
dict['SDN'] = "Sudan";
dict['SUR'] = "Suriname";
dict['SWZ'] = "Swaziland";
dict['SWE'] = "Sweden";
dict['CHE'] = "Switzerland";
dict['SYR'] = "Syria";
dict['TWN'] = "Taiwan";
dict['TJK'] = "Tajikistan";
dict['TZA'] = "Tanzania";
dict['THA'] = "Thailand";
dict['TLS'] = "Timor-Leste";
dict['TGO'] = "Togo";
dict['TKL'] = "Tokelau";
dict['TON'] = "Tonga";
dict['TTO'] = "Trinidad and Tobago";
dict['TUN'] = "Tunisia";
dict['TUR'] = "Turkey";
dict['TKM'] = "Turkmenistan";
dict['TCA'] = "Turks and Caicos";
dict['TUV'] = "Tuvalu";
dict['UGA'] = "Uganda";
dict['UKR'] = "Ukraine";
dict['ARE'] = "United Arab Emirates";
dict['GBR'] = "United Kingdom";
dict['URY'] = "Uruguay";
dict['USA'] = "USA";
dict['UZB'] = "Uzbekistan";
dict['VUT'] = "Vanuatu";
dict['VEN'] = "Venezuela";
dict['VNM'] = "Vietnam";
dict['VGB'] = "Virgin Islands, British";
dict['VIR'] = "Virgin Islands, U.S.";
dict['ESH'] = "Western Sahara";
dict['YEM'] = "Yemen";
dict['ZMB'] = "Zambia";
dict['ZWE'] = "Zimbabwe";
return dict;
}