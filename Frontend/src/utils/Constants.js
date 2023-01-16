const API_BC = 'http://localhost:3001';
const API_MOFFIN_BOREAU_PF = 'https://sandbox.moffin.mx/api/v1/query/bureau_pf';
const TOKEN_MOFFIN = '8a353df548a4aae72fc11b72b315ad523cf6c03632e3a65541b2f142d0101679'

// USUARIOS 
const API_BC_USER = `${API_BC}/v1/user`;
const API_BC_LOGIN = `${API_BC_USER}/login`;


// Tarjetas
const API_BC_TARJETA_CODWAY = `${API_BC}/v1/card/`;



// Metodos de Pago
const API_BC_METODOS = `${API_BC}/v1/payment/`;

//Reportes
const API_BC_REPORTE = `${API_BC}/v1/moffin/report/`;


const COUNTRIES = {
    "Afghanistan": {
      "v2": "AF",
      "v3": "AFG"
    },
    "Albania": {
      "v2": "AL",
      "v3": "ALB"
    },
    "Algeria": {
      "v2": "DZ",
      "v3": "DZA"
    },
    "American Samoa": {
      "v2": "AS",
      "v3": "ASM"
    },
    "Andorra": {
      "v2": "AD",
      "v3": "AND"
    },
    "Angola": {
      "v2": "AO",
      "v3": "AGO"
    },
    "Anguilla": {
      "v2": "AI",
      "v3": "AIA"
    },
    "Antarctica": {
      "v2": "AQ",
      "v3": "ATA"
    },
    "Antigua and Barbuda": {
      "v2": "AG",
      "v3": "ATG"
    },
    "Argentina": {
      "v2": "AR",
      "v3": "ARG"
    },
    "Armenia": {
      "v2": "AM",
      "v3": "ARM"
    },
    "Aruba": {
      "v2": "AW",
      "v3": "ABW"
    },
    "Australia": {
      "v2": "AU",
      "v3": "AUS"
    },
    "Austria": {
      "v2": "AT",
      "v3": "AUT"
    },
    "Azerbaijan": {
      "v2": "AZ",
      "v3": "AZE"
    },
    "Bahamas": {
      "v2": "BS",
      "v3": "BHS"
    },
    "Bahrain": {
      "v2": "BH",
      "v3": "BHR"
    },
    "Bangladesh": {
      "v2": "BD",
      "v3": "BGD"
    },
    "Barbados": {
      "v2": "BB",
      "v3": "BRB"
    },
    "Belarus": {
      "v2": "BY",
      "v3": "BLR"
    },
    "Belgium": {
      "v2": "BE",
      "v3": "BEL"
    },
    "Belize": {
      "v2": "BZ",
      "v3": "BLZ"
    },
    "Benin": {
      "v2": "BJ",
      "v3": "BEN"
    },
    "Bermuda": {
      "v2": "BM",
      "v3": "BMU"
    },
    "Bhutan": {
      "v2": "BT",
      "v3": "BTN"
    },
    "Bolivia, Plurinational State of": {
      "v2": "BO",
      "v3": "BOL"
    },
    "Bolivia": {
      "v2": "BO",
      "v3": "BOL"
    },
    "Bosnia and Herzegovina": {
      "v2": "BA",
      "v3": "BIH"
    },
    "Botswana": {
      "v2": "BW",
      "v3": "BWA"
    },
    "Bouvet Island": {
      "v2": "BV",
      "v3": "BVT"
    },
    "Brazil": {
      "v2": "BR",
      "v3": "BRA"
    },
    "British Indian Ocean Territory": {
      "v2": "IO",
      "v3": "IOT"
    },
    "Brunei Darussalam": {
      "v2": "BN",
      "v3": "BRN"
    },
    "Brunei": {
      "v2": "BN",
      "v3": "BRN"
    },
    "Bulgaria": {
      "v2": "BG",
      "v3": "BGR"
    },
    "Burkina Faso": {
      "v2": "BF",
      "v3": "BFA"
    },
    "Burundi": {
      "v2": "BI",
      "v3": "BDI"
    },
    "Cambodia": {
      "v2": "KH",
      "v3": "KHM"
    },
    "Cameroon": {
      "v2": "CM",
      "v3": "CMR"
    },
    "Canada": {
      "v2": "CA",
      "v3": "CAN"
    },
    "Cape Verde": {
      "v2": "CV",
      "v3": "CPV"
    },
    "Cayman Islands": {
      "v2": "KY",
      "v3": "CYM"
    },
    "Central African Republic": {
      "v2": "CF",
      "v3": "CAF"
    },
    "Chad": {
      "v2": "TD",
      "v3": "TCD"
    },
    "Chile": {
      "v2": "CL",
      "v3": "CHL"
    },
    "China": {
      "v2": "CN",
      "v3": "CHN"
    },
    "Christmas Island": {
      "v2": "CX",
      "v3": "CXR"
    },
    "Cocos (Keeling) Islands": {
      "v2": "CC",
      "v3": "CCK"
    },
    "Colombia": {
      "v2": "CO",
      "v3": "COL"
    },
    "Comoros": {
      "v2": "KM",
      "v3": "COM"
    },
    "Congo": {
      "v2": "CG",
      "v3": "COG"
    },
    "the Democratic Republic of the Congo": {
      "v2": "CD",
      "v3": "COD"
    },
    "Cook Islands": {
      "v2": "CK",
      "v3": "COK"
    },
    "Costa Rica": {
      "v2": "CR",
      "v3": "CRI"
    },
    "Côte d'Ivoire": {
      "v2": "CI",
      "v3": "CIV"
    },
    "Ivory Coast": {
      "v2": "CI",
      "v3": "CIV"
    },
    "Croatia": {
      "v2": "HR",
      "v3": "HRV"
    },
    "Cuba": {
      "v2": "CU",
      "v3": "CUB"
    },
    "Cyprus": {
      "v2": "CY",
      "v3": "CYP"
    },
    "Czech Republic": {
      "v2": "CZ",
      "v3": "CZE"
    },
    "Denmark": {
      "v2": "DK",
      "v3": "DNK"
    },
    "Djibouti": {
      "v2": "DJ",
      "v3": "DJI"
    },
    "Dominica": {
      "v2": "DM",
      "v3": "DMA"
    },
    "Dominican Republic": {
      "v2": "DO",
      "v3": "DOM"
    },
    "Ecuador": {
      "v2": "EC",
      "v3": "ECU"
    },
    "Egypt": {
      "v2": "EG",
      "v3": "EGY"
    },
    "El Salvador": {
      "v2": "SV",
      "v3": "SLV"
    },
    "Equatorial Guinea": {
      "v2": "GQ",
      "v3": "GNQ"
    },
    "Eritrea": {
      "v2": "ER",
      "v3": "ERI"
    },
    "Estonia": {
      "v2": "EE",
      "v3": "EST"
    },
    "Ethiopia": {
      "v2": "ET",
      "v3": "ETH"
    },
    "Falkland Islands (Malvinas)": {
      "v2": "FK",
      "v3": "FLK"
    },
    "Faroe Islands": {
      "v2": "FO",
      "v3": "FRO"
    },
    "Fiji": {
      "v2": "FJ",
      "v3": "FJI"
    },
    "Finland": {
      "v2": "FI",
      "v3": "FIN"
    },
    "France": {
      "v2": "FR",
      "v3": "FRA"
    },
    "French Guiana": {
      "v2": "GF",
      "v3": "GUF"
    },
    "French Polynesia": {
      "v2": "PF",
      "v3": "PYF"
    },
    "French Southern Territories": {
      "v2": "TF",
      "v3": "ATF"
    },
    "Gabon": {
      "v2": "GA",
      "v3": "GAB"
    },
    "Gambia": {
      "v2": "GM",
      "v3": "GMB"
    },
    "Georgia": {
      "v2": "GE",
      "v3": "GEO"
    },
    "Germany": {
      "v2": "DE",
      "v3": "DEU"
    },
    "Ghana": {
      "v2": "GH",
      "v3": "GHA"
    },
    "Gibraltar": {
      "v2": "GI",
      "v3": "GIB"
    },
    "Greece": {
      "v2": "GR",
      "v3": "GRC"
    },
    "Greenland": {
      "v2": "GL",
      "v3": "GRL"
    },
    "Grenada": {
      "v2": "GD",
      "v3": "GRD"
    },
    "Guadeloupe": {
      "v2": "GP",
      "v3": "GLP"
    },
    "Guam": {
      "v2": "GU",
      "v3": "GUM"
    },
    "Guatemala": {
      "v2": "GT",
      "v3": "GTM"
    },
    "Guernsey": {
      "v2": "GG",
      "v3": "GGY"
    },
    "Guinea": {
      "v2": "GN",
      "v3": "GIN"
    },
    "Guinea-Bissau": {
      "v2": "GW",
      "v3": "GNB"
    },
    "Guyana": {
      "v2": "GY",
      "v3": "GUY"
    },
    "Haiti": {
      "v2": "HT",
      "v3": "HTI"
    },
    "Heard Island and McDonald Islands": {
      "v2": "HM",
      "v3": "HMD"
    },
    "Holy See (Vatican City State)": {
      "v2": "VA",
      "v3": "VAT"
    },
    "Honduras": {
      "v2": "HN",
      "v3": "HND"
    },
    "Hong Kong": {
      "v2": "HK",
      "v3": "HKG"
    },
    "Hungary": {
      "v2": "HU",
      "v3": "HUN"
    },
    "Iceland": {
      "v2": "IS",
      "v3": "ISL"
    },
    "India": {
      "v2": "IN",
      "v3": "IND"
    },
    "Indonesia": {
      "v2": "ID",
      "v3": "IDN"
    },
    "Iran, Islamic Republic of": {
      "v2": "IR",
      "v3": "IRN"
    },
    "Iraq": {
      "v2": "IQ",
      "v3": "IRQ"
    },
    "Ireland": {
      "v2": "IE",
      "v3": "IRL"
    },
    "Isle of Man": {
      "v2": "IM",
      "v3": "IMN"
    },
    "Israel": {
      "v2": "IL",
      "v3": "ISR"
    },
    "Italy": {
      "v2": "IT",
      "v3": "ITA"
    },
    "Jamaica": {
      "v2": "JM",
      "v3": "JAM"
    },
    "Japan": {
      "v2": "JP",
      "v3": "JPN"
    },
    "Jersey": {
      "v2": "JE",
      "v3": "JEY"
    },
    "Jordan": {
      "v2": "JO",
      "v3": "JOR"
    },
    "Kazakhstan": {
      "v2": "KZ",
      "v3": "KAZ"
    },
    "Kenya": {
      "v2": "KE",
      "v3": "KEN"
    },
    "Kiribati": {
      "v2": "KI",
      "v3": "KIR"
    },
    "Korea, Democratic People's Republic of": {
      "v2": "KP",
      "v3": "PRK"
    },
    "Korea, Republic of": {
      "v2": "KR",
      "v3": "KOR"
    },
    "South Korea": {
      "v2": "KR",
      "v3": "KOR"
    },
    "Kuwait": {
      "v2": "KW",
      "v3": "KWT"
    },
    "Kyrgyzstan": {
      "v2": "KG",
      "v3": "KGZ"
    },
    "Lao People's Democratic Republic": {
      "v2": "LA",
      "v3": "LAO"
    },
    "Latvia": {
      "v2": "LV",
      "v3": "LVA"
    },
    "Lebanon": {
      "v2": "LB",
      "v3": "LBN"
    },
    "Lesotho": {
      "v2": "LS",
      "v3": "LSO"
    },
    "Liberia": {
      "v2": "LR",
      "v3": "LBR"
    },
    "Libyan Arab Jamahiriya": {
      "v2": "LY",
      "v3": "LBY"
    },
    "Libya": {
      "v2": "LY",
      "v3": "LBY"
    },
    "Liechtenstein": {
      "v2": "LI",
      "v3": "LIE"
    },
    "Lithuania": {
      "v2": "LT",
      "v3": "LTU"
    },
    "Luxembourg": {
      "v2": "LU",
      "v3": "LUX"
    },
    "Macao": {
      "v2": "MO",
      "v3": "MAC"
    },
    "Macedonia, the former Yugoslav Republic of": {
      "v2": "MK",
      "v3": "MKD"
    },
    "Madagascar": {
      "v2": "MG",
      "v3": "MDG"
    },
    "Malawi": {
      "v2": "MW",
      "v3": "MWI"
    },
    "Malaysia": {
      "v2": "MY",
      "v3": "MYS"
    },
    "Maldives": {
      "v2": "MV",
      "v3": "MDV"
    },
    "Mali": {
      "v2": "ML",
      "v3": "MLI"
    },
    "Malta": {
      "v2": "MT",
      "v3": "MLT"
    },
    "Marshall Islands": {
      "v2": "MH",
      "v3": "MHL"
    },
    "Martinique": {
      "v2": "MQ",
      "v3": "MTQ"
    },
    "Mauritania": {
      "v2": "MR",
      "v3": "MRT"
    },
    "Mauritius": {
      "v2": "MU",
      "v3": "MUS"
    },
    "Mayotte": {
      "v2": "YT",
      "v3": "MYT"
    },
    "Mexico": {
      "v2": "MX",
      "v3": "MEX"
    },
    "Micronesia, Federated States of": {
      "v2": "FM",
      "v3": "FSM"
    },
    "Moldova, Republic of": {
      "v2": "MD",
      "v3": "MDA"
    },
    "Monaco": {
      "v2": "MC",
      "v3": "MCO"
    },
    "Mongolia": {
      "v2": "MN",
      "v3": "MNG"
    },
    "Montenegro": {
      "v2": "ME",
      "v3": "MNE"
    },
    "Montserrat": {
      "v2": "MS",
      "v3": "MSR"
    },
    "Morocco": {
      "v2": "MA",
      "v3": "MAR"
    },
    "Mozambique": {
      "v2": "MZ",
      "v3": "MOZ"
    },
    "Myanmar": {
      "v2": "MM",
      "v3": "MMR"
    },
    "Burma": {
      "v2": "MM",
      "v3": "MMR"
    },
    "Namibia": {
      "v2": "NA",
      "v3": "NAM"
    },
    "Nauru": {
      "v2": "NR",
      "v3": "NRU"
    },
    "Nepal": {
      "v2": "NP",
      "v3": "NPL"
    },
    "Netherlands": {
      "v2": "NL",
      "v3": "NLD"
    },
    "Netherlands Antilles": {
      "v2": "AN",
      "v3": "ANT"
    },
    "New Caledonia": {
      "v2": "NC",
      "v3": "NCL"
    },
    "New Zealand": {
      "v2": "NZ",
      "v3": "NZL"
    },
    "Nicaragua": {
      "v2": "NI",
      "v3": "NIC"
    },
    "Niger": {
      "v2": "NE",
      "v3": "NER"
    },
    "Nigeria": {
      "v2": "NG",
      "v3": "NGA"
    },
    "Niue": {
      "v2": "NU",
      "v3": "NIU"
    },
    "Norfolk Island": {
      "v2": "NF",
      "v3": "NFK"
    },
    "Northern Mariana Islands": {
      "v2": "MP",
      "v3": "MNP"
    },
    "Norway": {
      "v2": "NO",
      "v3": "NOR"
    },
    "Oman": {
      "v2": "OM",
      "v3": "OMN"
    },
    "Pakistan": {
      "v2": "PK",
      "v3": "PAK"
    },
    "Palau": {
      "v2": "PW",
      "v3": "PLW"
    },
    "Palestinian Territory, Occupied": {
      "v2": "PS",
      "v3": "PSE"
    },
    "Panama": {
      "v2": "PA",
      "v3": "PAN"
    },
    "Papua New Guinea": {
      "v2": "PG",
      "v3": "PNG"
    },
    "Paraguay": {
      "v2": "PY",
      "v3": "PRY"
    },
    "Peru": {
      "v2": "PE",
      "v3": "PER"
    },
    "Philippines": {
      "v2": "PH",
      "v3": "PHL"
    },
    "Pitcairn": {
      "v2": "PN",
      "v3": "PCN"
    },
    "Poland": {
      "v2": "PL",
      "v3": "POL"
    },
    "Portugal": {
      "v2": "PT",
      "v3": "PRT"
    },
    "Puerto Rico": {
      "v2": "PR",
      "v3": "PRI"
    },
    "Qatar": {
      "v2": "QA",
      "v3": "QAT"
    },
    "Réunion": {
      "v2": "RE",
      "v3": "REU"
    },
    "Romania": {
      "v2": "RO",
      "v3": "ROU"
    },
    "Russian Federation": {
      "v2": "RU",
      "v3": "RUS"
    },
    "Russia": {
      "v2": "RU",
      "v3": "RUS"
    },
    "Rwanda": {
      "v2": "RW",
      "v3": "RWA"
    },
    "Saint Helena, Ascension and Tristan da Cunha": {
      "v2": "SH",
      "v3": "SHN"
    },
    "Saint Kitts and Nevis": {
      "v2": "KN",
      "v3": "KNA"
    },
    "Saint Lucia": {
      "v2": "LC",
      "v3": "LCA"
    },
    "Saint Pierre and Miquelon": {
      "v2": "PM",
      "v3": "SPM"
    },
    "Saint Vincent and the Grenadines": {
      "v2": "VC",
      "v3": "VCT"
    },
    "Saint Vincent & the Grenadines": {
      "v2": "VC",
      "v3": "VCT"
    },
    "St. Vincent and the Grenadines": {
      "v2": "VC",
      "v3": "VCT"
    },
    "Samoa": {
      "v2": "WS",
      "v3": "WSM"
    },
    "San Marino": {
      "v2": "SM",
      "v3": "SMR"
    },
    "Sao Tome and Principe": {
      "v2": "ST",
      "v3": "STP"
    },
    "Saudi Arabia": {
      "v2": "SA",
      "v3": "SAU"
    },
    "Senegal": {
      "v2": "SN",
      "v3": "SEN"
    },
    "Serbia": {
      "v2": "RS",
      "v3": "SRB"
    },
    "Seychelles": {
      "v2": "SC",
      "v3": "SYC"
    },
    "Sierra Leone": {
      "v2": "SL",
      "v3": "SLE"
    },
    "Singapore": {
      "v2": "SG",
      "v3": "SGP"
    },
    "Slovakia": {
      "v2": "SK",
      "v3": "SVK"
    },
    "Slovenia": {
      "v2": "SI",
      "v3": "SVN"
    },
    "Solomon Islands": {
      "v2": "SB",
      "v3": "SLB"
    },
    "Somalia": {
      "v2": "SO",
      "v3": "SOM"
    },
    "South Africa": {
      "v2": "ZA",
      "v3": "ZAF"
    },
    "South Georgia and the South Sandwich Islands": {
      "v2": "GS",
      "v3": "SGS"
    },
    "South Sudan": {
      "v2": "SS",
      "v3": "SSD"
    },
    "Spain": {
      "v2": "ES",
      "v3": "ESP"
    },
    "Sri Lanka": {
      "v2": "LK",
      "v3": "LKA"
    },
    "Sudan": {
      "v2": "SD",
      "v3": "SDN"
    },
    "Suriname": {
      "v2": "SR",
      "v3": "SUR"
    },
    "Svalbard and Jan Mayen": {
      "v2": "SJ",
      "v3": "SJM"
    },
    "Swaziland": {
      "v2": "SZ",
      "v3": "SWZ"
    },
    "Sweden": {
      "v2": "SE",
      "v3": "SWE"
    },
    "Switzerland": {
      "v2": "CH",
      "v3": "CHE"
    },
    "Syrian Arab Republic": {
      "v2": "SY",
      "v3": "SYR"
    },
    "Taiwan, Province of China": {
      "v2": "TW",
      "v3": "TWN"
    },
    "Taiwan": {
      "v2": "TW",
      "v3": "TWN"
    },
    "Tajikistan": {
      "v2": "TJ",
      "v3": "TJK"
    },
    "Tanzania, United Republic of": {
      "v2": "TZ",
      "v3": "TZA"
    },
    "Thailand": {
      "v2": "TH",
      "v3": "THA"
    },
    "Timor-Leste": {
      "v2": "TL",
      "v3": "TLS"
    },
    "Togo": {
      "v2": "TG",
      "v3": "TGO"
    },
    "Tokelau": {
      "v2": "TK",
      "v3": "TKL"
    },
    "Tonga": {
      "v2": "TO",
      "v3": "TON"
    },
    "Trinidad and Tobago": {
      "v2": "TT",
      "v3": "TTO"
    },
    "Tunisia": {
      "v2": "TN",
      "v3": "TUN"
    },
    "Turkey": {
      "v2": "TR",
      "v3": "TUR"
    },
    "Turkmenistan": {
      "v2": "TM",
      "v3": "TKM"
    },
    "Turks and Caicos Islands": {
      "v2": "TC",
      "v3": "TCA"
    },
    "Tuvalu": {
      "v2": "TV",
      "v3": "TUV"
    },
    "Uganda": {
      "v2": "UG",
      "v3": "UGA"
    },
    "Ukraine": {
      "v2": "UA",
      "v3": "UKR"
    },
    "United Arab Emirates": {
      "v2": "AE",
      "v3": "ARE"
    },
    "United Kingdom": {
      "v2": "GB",
      "v3": "GBR"
    },
    "United States": {
      "v2": "US",
      "v3": "USA"
    },
    "United States Minor Outlying Islands": {
      "v2": "UM",
      "v3": "UMI"
    },
    "Uruguay": {
      "v2": "UY",
      "v3": "URY"
    },
    "Uzbekistan": {
      "v2": "UZ",
      "v3": "UZB"
    },
    "Vanuatu": {
      "v2": "VU",
      "v3": "VUT"
    },
    "Venezuela, Bolivarian Republic of": {
      "v2": "VE",
      "v3": "VEN"
    },
    "Venezuela": {
      "v2": "VE",
      "v3": "VEN"
    },
    "Viet Nam": {
      "v2": "VN",
      "v3": "VNM"
    },
    "Vietnam": {
      "v2": "VN",
      "v3": "VNM"
    },
    "Virgin Islands, British": {
      "v2": "VG",
      "v3": "VGB"
    },
    "Virgin Islands, U.S.": {
      "v2": "VI",
      "v3": "VIR"
    },
    "Wallis and Futuna": {
      "v2": "WF",
      "v3": "WLF"
    },
    "Western Sahara": {
      "v2": "EH",
      "v3": "ESH"
    },
    "Yemen": {
      "v2": "YE",
      "v3": "YEM"
    },
    "Zambia": {
      "v2": "ZM",
      "v3": "ZMB"
    },
    "Zimbabwe": {
      "v2": "ZW",
      "v3": "ZWE"
    }
  };

module.exports = {
    API_BC_USER,
    API_BC_LOGIN,
    API_BC_TARJETA_CODWAY,
    API_BC_METODOS,
    API_MOFFIN_BOREAU_PF,
    TOKEN_MOFFIN,
    API_BC_REPORTE,
    COUNTRIES
}